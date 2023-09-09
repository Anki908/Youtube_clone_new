const Shimmer = () => {
    return (
        <div className="shimmer-list flex flex-wrap p-4 ml-8">
            {Array(12)
            .fill("")
            .map((e , index) => (
                <div key={index} className="shimmercard bg-gray-300 w-60 h-40 m-2"></div>
            ))}
        </div>
    )
}
export default Shimmer;