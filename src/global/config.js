export const api_domain = 'http://localhost:8000/'
export const login_url = api_domain + 'oauth/token'
export const user_url = api_domain + 'api/user'
export const users_list_url = api_domain + 'api/v1/users-list'

export const create_user_url = api_domain + 'api/v1/create-user'

export const contact_us_url = api_domain + 'api/v1/contact-us'

/**
 * Routes for app-link
 * @type {string}
 */
export const add_app_link_url = api_domain + 'api/v1/add-app-link'
export const get_all_app_links_url = api_domain + 'api/v1/get-all-app-links'

/**Routes for post article here */
export const add_new_article_url = api_domain + 'api/v1/add-new-article'
export const get_all_articles_url = api_domain + 'api/v1/show-all-articles'
export  const get_latest_article_url = api_domain + 'api/v1/get-latest-article'
export const get_fitness_articles_url = api_domain + 'api/v1/get-fitness-articles'
export const get_diseases_articles_url = api_domain + 'api/v1/get-diseases-articles'
export const get_medicine_articles_url = api_domain + 'api/v1/get-medicine-articles'
/**Routes for post article here */

export const forgot_password_url = api_domain + 'api/forgot-password'
export const reset_password_url = api_domain + 'api/reset-password'


export   const get_header  = function () {
    const token_date = JSON.parse(window.localStorage.getItem('auth_user'))
    const headers = {
        'Accept' : 'application/json',
        'Authorization': 'Bearer ' +  token_date.access_token,
    }
    return headers
}
