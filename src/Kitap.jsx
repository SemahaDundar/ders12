function Kitap(kitap){


    return(
        <>
        <div>
            <img src={kitap} alt="" />
            <h2>{kitap.ad}</h2>
        </div>
        
        </>
    )
}
export default Kitap;