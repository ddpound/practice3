"use client"
import { Result } from "postcss";

export default function create(){
    return(
        <>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const title = e.target.value;
                const content = e.target.value;
                const option = {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({title, content})
                }
                fetch('http://localhost:3000/test-board', option)
                    .then(res=>res.json)
                    .then(result => {
                        console.log(result)
                    });
            }}>
                <h2>create 창입니다!</h2>
                <label>제목 : </label><input type="text"></input>
                <label>내용 : </label><input type="text"></input>
                <input type="submit" value="작성" />
            </form>
            
        </>
    )
    
}