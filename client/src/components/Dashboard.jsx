import useAuth from "../useAuth"

function Dashboard({ code }) {
    const accessToken = useAuth(code)
    console.log(accessToken)
    return (
        <div>dashboard</div>
    )
}

export default Dashboard
