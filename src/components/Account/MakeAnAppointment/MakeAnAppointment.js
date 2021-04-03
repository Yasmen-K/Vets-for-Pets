const MakeAnAppointment = ({resetMakeAnAppointment}) => {
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        resetMakeAnAppointment(true,true)
    }
    
    return ( 
        <div>
            <form onClick={handleSubmit}>
                <label htmlFor="date">Choose a date:</label>
                <input type="date"/>


            </form>
        </div>
    );
}
 
export default MakeAnAppointment;