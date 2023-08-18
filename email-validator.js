//checks if email is valid

exports.main = async (event, callback) => {
    const email = event.inputFields["cms_contractor_contact_email"];
  
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
      if (email.match(regex)) 
        callback({
          outputFields: {
            emailIsValid: true,
          },
        });
      else
        callback({
          outputFields: {
            emailIsValid: false,
          },
        });
  };