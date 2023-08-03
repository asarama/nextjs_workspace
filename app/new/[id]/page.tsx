export default function NewId({
    params,
}: {
    params: { id: string }
}) {
    return (
        <>
            <h1>New</h1>
            <p>{params.id}</p>
        </>
    )
}