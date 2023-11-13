'use client'

import { useRouter } from "next/navigation";

async function boardDelete(id){
    const option = {
        method : 'DELETE',
        cache : 'no-store',
    }
    const res = await fetch("http://localhost:3000/test-board/" + id, option);
    const board = await res.json();
    console.log('success delete');
}

export default async function read(props){
    const router = useRouter();
    const id = props.params.i
    const res = await fetch("http://localhost:3000/test-board/" + id, { cache : 'no-store'});
    const board = await res.json();
    return(
    <>
        <button onClick={()=>{
            boardDelete(id)
            router.push("/read");
        }}>삭제버튼</button>
        <h4>{board.board.title}</h4>
        <p>{board.board.content}</p>
    </>
    )
}