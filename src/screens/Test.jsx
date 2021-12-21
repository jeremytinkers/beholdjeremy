export default function Test() {

    const fullProjectData = JSON.parse(localStorage.getItem("fullProjectData"));

    fullProjectData.sort((a, b) => (a.id > b.id) ? 1 : -1)

    console.log(fullProjectData);
    return (
        <div>

        <h1>hello</h1>
        
        {
        fullProjectData.map((curP)=>{

            return <div key={curP.id}>{curP.name}</div>
        })}

        </div>
    )
}
