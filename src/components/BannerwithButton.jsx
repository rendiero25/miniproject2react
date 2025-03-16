const BannerwithButton = ({imageBannerwithButton, altTextIwB, nameButton, imageBannerwithButtonStyle}) => {
    return(
        <section className="flex flex-col justify-center items-center">
            <img src={imageBannerwithButton} alt={altTextIwB} className={imageBannerwithButtonStyle}/>
            <button className="absolute bg-white px-6 py-2 text-black font-medium rounded-full">{nameButton}</button>
        </section>
    )
}

export default BannerwithButton;