function sendForm(e) {
    var name = document.mForm.name.value;
    var mail = document.mForm.email.value;
    var message = document.mForm.message.value;
    var err = "";
    var regMail = /^\w+@\w+\b.{1}\w+\b$/i;

    if (name.length < 2) {
        err = "Имя должно быть больше двух символов!";
    }
    else if (!(/^\w+$/.test(name))) {
        err = "Имя должно состоять из латинских символов!";
    }
    else if(!(regMail.test(mail))) {
        err = "Неверный тип почты";
    }
    else if(!name) {
        err = "Имя обязательное поле";
    }
    else if (!mail) {
        err = "E-mail обязательное поле";
    }
    else if (!message) {
        err = "Сообщение обязательное поле";
    }

    if (err) {
        swal(err, {
            icon: "error",
        });
        e.preventDefault();
    }
    else {
        console.log("name: " + name + "; mail: " + mail + "; message: " + message);
        swal("Сообщение отправлено", "", "success");
    }
}

var sendButton = document.mForm.send;

sendButton.addEventListener("click", sendForm);
