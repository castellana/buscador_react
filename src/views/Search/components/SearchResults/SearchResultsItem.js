/* Este va a ser un hijo, con lo cual no hay que ponerle el key a él, sino allí donde vayamos a llamar este componente. 
Y además, pondremos las propiedades que va a recibir de su padre (title, tags, etc) como propiedades: */
export default function SearchResultsItem({ title, tags, image, url }) {
    return (
        <div
            style={{
                backgroundColor: '#E8E7E7',
                marginTop: '1rem',
                marginBottom: '1rem',
                padding: 10,
                width: '100%',
            }}
        >
            <p>{title}</p>
            <p>{tags}</p>
            <img src={image} alt='' />
            <p>{url}</p>
        </div>
    );
}
