
const getBoard = async() => {
    try{
        await fetch("http://localhost:3000/test-board",{
            cache : "no-store",
        });

        if(!res.ok){
            
        }
    }catch(error){
        console.log(error);
    }

    return null;
}

export default function read(props){
    return(
    <>
        read 페이지입니다
        {props.params.i}
    </>
    )
    
}