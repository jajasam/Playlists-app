import useAuth from "../useAuth"

function Dashboard({ code }) {
    const accessToken = useAuth(code)
    return (
        <div>dashboard</div>
    )
}

export default Dashboard
