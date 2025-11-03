export default function Panel(){
    if (localStorage.getItem("sesion") === null) {
      window.location.replace('/')
    }

    return (<>
    Panel
    </>
    )
}