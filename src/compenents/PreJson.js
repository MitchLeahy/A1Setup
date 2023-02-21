export default function PreJson({json}){

    return(
        <pre>
            {JSON.stringify(json)}
        </pre>
    )
}