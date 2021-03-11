import SearchResultsItem from './SearchResultsItem';

export default function SearchResults({ results, isSearching }) {
    return (
        <div style={{ width: '100%', padding: '0rem 2rem 0rem 2rem' }}>
            {!results?.length && isSearching && <p>No results found</p>}
            {results?.map((value) => {
                return (
                    <SearchResultsItem
                        key={value.id}
                        {...value} /* le pasamos todas las propiedades con spread operator */

                        /* o también se podría poner:
                title={value.title} tags={value.tags} image={value.image} url={value.url} */
                    />
                );
            })}
        </div>
    );
}
