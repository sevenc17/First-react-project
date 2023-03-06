
interface errors {
    error: string
}

export function Errors({error}: errors){
    return (
        <p className='loading'>{error}</p>
    )
}