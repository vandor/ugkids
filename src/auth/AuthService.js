import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'eventemitter3'

export default class AuthService {
  authNotifier = new EventEmitter()

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.isKidsChurchWorker = this.isKidsChurchWorker.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid'
  })

  login () {
    this.auth0.authorize()
  }

  handleAuthentication (router) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        router.app.dialog.preloader();
        this.setSession(authResult)
        console.log("Logged in success. authResult:", authResult);
        if (authResult.idTokenPayload && this.isKidsChurchWorker(authResult.idTokenPayload)) {
          router.navigate('/class-list', { reloadCurrent: true });
        } else {
          router.navigate('/checkin', { reloadCurrent: true });
        }
        router.app.dialog.close();
      } else if (err) {
        router.navigate('/', { reloadCurrent: true })
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  isKidsChurchWorker (idTokenPayload) {
    let id = idTokenPayload && idTokenPayload.sub || localStorage.getItem('id_token_payload_sub')
    return id === 'auth0|5aa2d103f3a5604b78f98fd4';
  }

  setSession (authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('id_token_payload_sub', authResult.idTokenPayload.sub)
    localStorage.setItem('expires_at', expiresAt)
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout (router) {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('id_token_payload_sub')
    localStorage.removeItem('expires_at')
    this.userProfile = null
    this.authNotifier.emit('authChange', { authenticated: false })
    router.navigate('/', { clearPreviousHistory: true })
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
