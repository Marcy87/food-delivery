document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM totalmente carregado");


    const btnres = document.getElementById("btnresumo");

    const msn1 = document.getElementById("mensagem1");
    const msn2 = document.getElementById("mensagem2");
    const msn3 = document.getElementById("mensagem3");
    const msn4 = document.getElementById("mensagem4");
    const msn5 = document.getElementById("mensagem5");

    btnres.addEventListener("click", function () {

        const cp0 = document.getElementById("codigo");
        const cp1 = document.getElementById("quantidade");
        const cp2 = document.getElementById("cupom");
        const cp3 = document.getElementById("desconto");
        const cp4 = document.getElementById("frete");

        let cod = cp0.options[cp0.selectedIndex].value;
        let qtd = parseInt(cp1.value);
        let cup = cp2.options[cp2.selectedIndex].value;
        let desc = parseFloat(cp3.value);
        let fret = cp4.options[cp4.selectedIndex].value;

        msn1.innerHTML = cod;
        msn2.innerHTML = qtd;
        msn3.innerHTML = desc;
        msn4.innerHTML = cup;
        msn5.innerHTML = fret;

        msn1.textContent = "Código digitado é: " + cod;
        msn2.textContent = "Quantidade digitado é: " + qtd;
        msn3.textContent = "Desconto digitado é: " + desc + " %";
        msn4.textContent = "Cupom digitado é: " + cup + "%";
        msn5.textContent = "Frete digitado é: " + fret;

        console.log("Executado");
    });

    const btnconf = document.getElementById("btnconfirmar");

    let numeropedido = 10;

    btnconf.addEventListener("click", function () {
        const msn6 = document.getElementById("mensagem6");
        const msn7 = document.getElementById("mensagem7");

        msn6.textContent = "";
        msn7.textContent = "";

        const cp0 = document.getElementById("codigo");
        const cp1 = document.getElementById("quantidade");
        const cp2 = document.getElementById("cupom");
        const cp3 = document.getElementById("desconto");
        const cp4 = document.getElementById("frete")

        let cod = cp0.options[cp0.selectedIndex].value;
        let qtd = parseInt(cp1.value);
        let desc = parseFloat(cp3.value);
        let cup = cp2.options[cp2.selectedIndex].value;
        let fret = cp4.options[cp4.selectedIndex].value;
        let calcularqtd = 0;
        let calcularcupom = 0;
        let totalcomcupom = 0;
        let totaldesc = 0;
        let total = 0;
        let totalcomfrete = 0;

        switch (cod) {
            case '10':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 60 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
                break;
                case '11':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    };
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom25") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 20 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
            break;
            case '12':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    };
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom25") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 10 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
            break;
            case '13':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    };
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom25") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 5 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
            break;
            case '14':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    };
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom25") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 6 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
            break;
            case '15':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 10) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    };
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 20) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom25") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 5;
                            numeropedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 5;
                            numeropedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 10;
                            numeropedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 10;
                            numeropedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totaldesc = (totalcomcupom * desc) / 100;
                            total = totalcomcupom - totaldesc;

                            totalcomfrete = total + 15;
                            numeropedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularqtd = 8 * qtd;
                            calcularcupom = [(calcularqtd * 25) / 100];
                            totalcomcupom = calcularqtd - calcularcupom;

                            totalcomfrete = totalcomcupom + 15;
                            numeropedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
            break;
            default:
                alert("DEU ALGO ERRADO");
        };

        msn6.innerHTML = totalcomfrete;
        msn7.innerHTML = numeropedido;

        msn6.textContent = "O total com desconto é: R$ " + totalcomfrete;
        msn7.textContent = "Número do pedido é: " + numeropedido;
    });
});