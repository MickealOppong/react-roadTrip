
const FooterText = () => {
  const getDate = () => {
    return new Date().getFullYear();
  }
  return (
    <div className="footer-text">
      <p>copyright &#169; roadTrip Tours Limited <span>{getDate()}</span> all rights reserved</p>
    </div>
  )
}

export default FooterText;