import { Link } from '@adonisjs/inertia/react'

export default function Login() {
    return (
        <div className="form-container">
            <div>
                <h1> Login </h1>
                <p>Enter your details below to login to your account</p>
                <Link route="auth.redirect.intra">
                    <button>Login with Intra</button>
                </Link>
            </div>
        </div>
    )
}
