const Hamburger = () => {
  const btnEvent = () => {
    const navbarLink = document.querySelector('.navbar-link')
    navbarLink.classList.toggle('show');
  }
  return (
    <button onClick={btnEvent} className="bars-btn"><i className="fa fa-bars"></i></button>
  )
}

export default Hamburger;