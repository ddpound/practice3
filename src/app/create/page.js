"use client"
export default function create(){
    return(
        <>
            <form onSubmit={(e)=>{
                e.preventDefault();
                
                const title = e.target.title.value;
                const content = e.target.content.value;
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
                        alert('저장이 완료되었습니다.');
                    });
            }}>
                <h2>create 창입니다!</h2>
                <label>제목 : </label><input name="title" type="text"></input>
                <label>내용 : </label><input name="content" type="text"></input>
                <input type="submit" value="작성" />
            </form>
        </>
    )
}