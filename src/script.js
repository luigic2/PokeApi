

var AllPokeBaseLenght = 0;
var pb = 0;

function pokename() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=1126', {
        method: 'GET'
    })

        .then(response => response.json())
        .then(function (json) {

            var names001 = json.results;
            var names002 = Object.keys(names001);
            var namesLenght = Object.keys(names002).length;
            var QueryPokeNames = document.querySelector('.poke-name-catcher').value;
            var pid = 1;
            const regexName = /\b[A-Z]/;
            var QueryPokeNameFilterLowerCase = QueryPokeNames.charAt(0).toLowerCase() + QueryPokeNames.slice(1);


            var none = 0;
            for (i = 0; i < namesLenght; i++) {
                // console.log(json.results[i].name);
                // console.log(i);
                if (json.results[i].name === QueryPokeNameFilterLowerCase) {
                    pid = +i + 1;

                    var idcatch = document.querySelector('.poke-id-catcher').value = [pid];
                    // console.log(json.results[i]);



                    pokeid();
                } else {
                    none++;
                    if (none == namesLenght) {
                        alert("Nome Incorreto");
                    }
                }

            }
        });
}

function pokeid() {
    var p = 1;
    var idcatch = document.querySelector('.poke-id-catcher').value;




    var p = document.querySelector('.poke-id-catcher').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${p}`, {
        method: 'GET'

    })
        .then(response => response.json())
        .then(function (json) {



            //Input da base de dados do pokemon
            console.log(json);

            //Variavel do Nome do Pokemon

            var QueryPokenome = document.querySelector('.poke-nome');
            var QueryPokenames = document.querySelector('.poke-name-catcher');
            var CapitalizedName = json.name.charAt(0).toUpperCase() + json.name.slice(1);

            QueryPokenome.innerHTML = `<p class = "tituloNome"> ` + CapitalizedName;

            QueryPokenames.value = CapitalizedName;


            //Variavel de ID do Pokemon

            var QueryPokeId = document.querySelector('.poke-id');

            QueryPokeId.innerHTML = `<p class = "tituloid">` + json.id;

            //Variaveis das Imagens do Pokemon
            var imagens001 = json.forms;
            var imagens002 = Object.keys(imagens001);
            var imagensLenght = Object.keys(imagens002).length;
            var QueryPokeImagensMale = document.querySelector('.poke-imagens-macho');
            QueryPokeImagensMale.innerHTML = "";
            var QueryPokeImagensFemale = document.querySelector('.poke-imagens-femea');
            QueryPokeImagensFemale.innerHTML = "";


            //Variaveis das Status do Pokemon
            var status001 = json.stats;
            var status002 = Object.keys(status001);
            var statusLenght = Object.keys(status002).length;
            var QueryPokeStatus = document.querySelector('.poke-status');
            QueryPokeStatus.innerHTML = "";

            //Variaveis das Tipos do Pokemon
            var tipos001 = json.types;
            var tipos002 = Object.keys(tipos001);
            var tiposLenght = Object.keys(tipos002).length;
            var QueryPokeTipos = document.querySelector('.poke-tipos');
            var typei = [];
            var pic = 0;
            var i = 0;
            var jsontype2 = [];
            QueryPokeTipos.innerHTML = "";
            document.querySelector('.poke-efetividade-ddf').innerHTML = "";
            document.querySelector('.poke-efetividade-ddt').innerHTML = "";
            document.querySelector('.poke-efetividade-hdf').innerHTML = "";
            document.querySelector('.poke-efetividade-hdt').innerHTML = "";
            document.querySelector('.poke-efetividade-ndf').innerHTML = "";
            document.querySelector('.poke-efetividade-ndt').innerHTML = "";


            //Variaveis das Habilidades do Pokemon
            var habilidades001 = json.abilities;
            var habilidades002 = Object.keys(habilidades001);
            var habilidadesLenght = Object.keys(habilidades002).length;
            var QueryPokeHabilidades = document.querySelector('.poke-habilidades');
            QueryPokeHabilidades.innerHTML = "";

            //Variaveis doss Move-sets do Pokemon
            var moves001 = json.moves;
            var moves002 = Object.keys(moves001);
            var movesLenght = Object.keys(moves002).length;
            var QueryPokeMoves = document.querySelector('.poke-moves');
            QueryPokeMoves.innerHTML = "";
            var pokemovesmax = 0;
            var pokemovesmax = json.moves.length;
            var pokeident = 0;
            var pokepaged = document.getElementById('poke-moves-paginas');
            pokepaged.innerHTML = "";
            var pokepagedi = 1;
            var pokepagemax = Math.ceil(pokemovesmax / 18);
            pokepaged.innerHTML = + pokepagedi + `/` + pokepagemax;

            //Funcionalidade de investigação
            // console.log(json.stats);

            // console.log(Object.keys(habilidadesLenght).length);

            function pokeTypePersonal() {
                for (i = 0; i < json.types.length; i++)

                    typei[i] = json.types[i].type.name;

            }
            pokeTypePersonal();

            console.log(typei);

            //Função que imprime todas as imagens do Pokemon
            function imagensInput() {
                if (json.sprites.front_female != null) {
                    QueryPokeImagensMale.innerHTML += `<i class="gender-icon male-icon fa fa-mars" aria-hidden="true"></i>`;
                } else {
                    QueryPokeImagensMale.innerHTML += `<i class="gender-icon male-n-female-icon fa fa-venus-mars" aria-hidden="true"></i>`;

                }

                QueryPokeImagensMale.innerHTML += `<img src="` + json.sprites.front_default +
                    `" alt= "" class = "tituloImagens">`;
                QueryPokeImagensMale.innerHTML += `<img src="` + json.sprites.back_default +
                    `" alt= "" class = "tituloImagens">`;

                QueryPokeImagensMale.innerHTML += `<img src="` + "images/shine.png" +
                    `" alt= "" class="shine-imagens" id="shine-imagens">`;
                QueryPokeImagensMale.innerHTML += `<div class="poke-flexer">`;
                QueryPokeImagensMale.innerHTML += `<img src="` + json.sprites.front_shiny +
                    `" alt= "" class = "tituloImagens">`;
                QueryPokeImagensMale.innerHTML += `<img src="` + json.sprites.back_shiny +
                    `" alt= "" class = "tituloImagens">`;
                if (json.sprites.front_female != null) {
                    QueryPokeImagensFemale.innerHTML += ` <i class="gender-icon female-icon fa fa-venus" aria-hidden="true"></i>`;
                }
                QueryPokeImagensFemale.innerHTML += `<img src="` + json.sprites.front_female +
                    `" alt= "" class = "tituloImagens">`;
                QueryPokeImagensFemale.innerHTML += `<img src="` + json.sprites.back_female +
                    `" alt= "" class = "tituloImagens">`;
                QueryPokeImagensFemale.innerHTML += `<div/>`;


                QueryPokeImagensFemale.innerHTML += `<img src="` + json.sprites.front_shiny_female +
                    `" alt= "" class = "tituloImagens">`;
                QueryPokeImagensFemale.innerHTML += `<img src="` + json.sprites.back_shiny_female +
                    `" alt= "" class = "tituloImagens">`;
            }
            imagensInput();



            //Função que imprime todas os status do Pokemon
            function statusInput() {


                //Var para chamar o nome do status json.stats[i].stat.name  

                for (i = 0; i < statusLenght; i++) {
                    var statNameNun = "";
                    if (i == 0) {
                        statNameNun = "Vida";
                    } else if (i == 1) {
                        statNameNun = "Ataque";

                    } else if (i == 2) {
                        statNameNun = "Defesa";

                    } else if (i == 3) {
                        statNameNun = "Ataque Especial";

                    } else if (i == 4) {
                        statNameNun = "Defesa Especial";

                    } else if (i == 5) {
                        statNameNun = "Velocidade";

                    }
                    QueryPokeStatus.innerHTML += `<p class = "tituloStatus">` + statNameNun + ` : ` + json.stats[i].base_stat + `</p>`;
                }




            }
            statusInput();



            //Função que imprime todas as habilidades do Pokemon
            function abilitiesInput() {
                let i = 0;

                for (i = 0; i < habilidadesLenght; i++) {
                    QueryPokeHabilidades.innerHTML += `<p class = "tituloAbilidades">` + json.abilities[i].ability.name;
                }


            }
            abilitiesInput();




            //Função que imprime todas os Moves do Pokemon
            function movesInput() {

                QueryPokeMoves.textContent = '';
                QueryPokeMoves = document.querySelector('.poke-moves');



                for (let i = pokeident; i <= pokeident + 17; i++) {


                    QueryPokeMoves.innerHTML += `<p class = "tituloMoves">` + json.moves[i].move.name;



                }

            }


            movesInput();



            document.querySelector("#moves-add-id").addEventListener("click", () => {





                pokeident = pokeident + 18;
                if (pokeident >= pokemovesmax) {
                    pokeident = pokeident - 18;
                    movesInput();

                } else {

                    pokepaged.innerHTML = '';
                    pokepagedi = pokepagedi + 1;
                    pokepaged.innerHTML = + pokepagedi + `/` + pokepagemax;
                    movesInput();
                }
            });

            document.querySelector("#moves-remove-id").addEventListener("click", () => {



                pokeident = pokeident - 18;
                if (pokeident < 0) {
                    pokeident = 0;
                    movesInput();

                } else {
                    pokepaged.innerHTML = '';
                    pokepagedi = pokepagedi - 1;
                    pokepaged.innerHTML = + pokepagedi + `/` + pokepagemax;
                    movesInput();
                }

            });



            function typesInput() {




                for (i = 0; i < tiposLenght; i++) {
                    const pokeTypeName = json.types[i].type.name;
                    var icon =
                        (pokeTypeName == "normal") ? "images/normal.svg" :
                            (pokeTypeName == "fighting") ? "images/fighting.svg" :
                                (pokeTypeName == "flying") ? "images/flying.svg" :
                                    (pokeTypeName == "poison") ? "images/poison.svg" :
                                        (pokeTypeName == "ground") ? "images/ground.svg" :
                                            (pokeTypeName == "rock") ? "images/rock.svg" :
                                                (pokeTypeName == "bug") ? "images/bug.svg" :
                                                    (pokeTypeName == "ghost") ? "images/ghost.svg" :
                                                        (pokeTypeName == "steel") ? "images/steel.svg" :
                                                            (pokeTypeName == "fire") ? "images/fire.svg" :
                                                                (pokeTypeName == "water") ? "images/water.svg" :
                                                                    (pokeTypeName == "grass") ? "images/grass.svg" :
                                                                        (pokeTypeName == "electric") ? "images/electric.svg" :
                                                                            (pokeTypeName == "psychic") ? "images/psychic.svg" :
                                                                                (pokeTypeName == "ice") ? "images/ice.svg" :
                                                                                    (pokeTypeName == "dragon") ? "images/dragon.svg" :
                                                                                        (pokeTypeName == "dark") ? "images/dark.svg" :
                                                                                            (pokeTypeName == "fairy") ? "images/fairy.svg" :
                                                                                                (pokeTypeName == "unknown") ? "images/unknown.svg" :
                                                                                                    (pokeTypeName == "shadow") ? "images/dark.svg" : '';

                    var pokeTypeNameTranslate =
                        (pokeTypeName == "normal") ? "Normal" :
                            (pokeTypeName == "fighting") ? "Lutador" :
                                (pokeTypeName == "flying") ? "Voador" :
                                    (pokeTypeName == "poison") ? "Venenoso" :
                                        (pokeTypeName == "ground") ? "Terrestre" :
                                            (pokeTypeName == "rock") ? "Pedra" :
                                                (pokeTypeName == "bug") ? "Inseto" :
                                                    (pokeTypeName == "ghost") ? "Fantasma" :
                                                        (pokeTypeName == "steel") ? "Aço" :
                                                            (pokeTypeName == "fire") ? "Fogo" :
                                                                (pokeTypeName == "water") ? "Água" :
                                                                    (pokeTypeName == "grass") ? "Grama" :
                                                                        (pokeTypeName == "electric") ? "Elétrico" :
                                                                            (pokeTypeName == "psychic") ? "Psíquico" :
                                                                                (pokeTypeName == "ice") ? "Gelo" :
                                                                                    (pokeTypeName == "dragon") ? "Dragão" :
                                                                                        (pokeTypeName == "dark") ? "Sombrio" :
                                                                                            (pokeTypeName == "fairy") ? "Fada" :
                                                                                                (pokeTypeName == "unknown") ? "Desconhecido" :
                                                                                                    (pokeTypeName == "shadow") ? "Sombrio" : '';


                    QueryPokeTipos.innerHTML += `<div class = "poke-flexer tipo-div">` + `<div class = "imgTipos ` + pokeTypeName + ` " id = "` + pokeTypeName + `"><img class = " " src="` + icon + `">` + `</div>` + `<p class = "tituloTipos texto-` + pokeTypeName + `" > ` + pokeTypeNameTranslate + `</div>`;

                }
            }

            typesInput();



            function pokeEfetividadeCalc() {
                var pokeefetividadedirectionddfcont = [];
                var pokeefetividadedirectionddtcont = [];
                var pokeefetividadedirectionhdfcont = [];
                var pokeefetividadedirectionhdtcont = [];
                var pokeefetividadedirectionndfcont = [];
                var pokeefetividadedirectionndtcont = [];

                fetch(`https://pokeapi.co/api/v2/type/`, {
                    method: 'GET'

                })
                    .then(response => response.json())
                    .then(function (json) {

                        console.log(json);
                        function pokeapitype() {
                            for (i = 0; i < json.results.length; i++) {
                                jsontype2[i] = json.results[i].name;

                            }
                            for (i = 0; i < json.results.length; i++) {

                            }

                        }
                        pokeapitype();
                        console.log(typei);
                        console.log(jsontype2);
                        function pokeapitype2() {

                            var foi = typei.some(ai => jsontype2.includes(ai));
                            var n = 0;
                            var m = 0;
                            var b = 0;
                            var q = 0;
                            var w = 0;
                            var r = 0;
                            var o = 0;


                            for (j = 0; j < typei.length; j++) {
                                for (h = 0; h < jsontype2.length; h++) {
                                    if (typei[j] == jsontype2[h]) {

                                        console.log(jsontype2[h]);
                                        console.log(h);
                                        fetch(`https://pokeapi.co/api/v2/type/${jsontype2[h]}`, {
                                            method: 'GET'

                                        }).then(response => response.json())
                                            .then(function (json) {
                                                console.log(json);
                                                var pokeefetividadedirectionddf = document.querySelector('.poke-efetividade-ddf');
                                                var pokeefetividadedirectionddfcontinner = [];
                                                var pokeefetividadedirectionddt = document.querySelector('.poke-efetividade-ddt');
                                                var pokeefetividadedirectionddtcontinner = [];
                                                var pokeefetividadedirectionhdf = document.querySelector('.poke-efetividade-hdf');
                                                var pokeefetividadedirectionhdfcontinner = [];
                                                var pokeefetividadedirectionhdt = document.querySelector('.poke-efetividade-hdt');
                                                var pokeefetividadedirectionhdtcontinner = [];
                                                var pokeefetividadedirectionndf = document.querySelector('.poke-efetividade-ndf');
                                                var pokeefetividadedirectionndfcontinner = [];
                                                var pokeefetividadedirectionndt = document.querySelector('.poke-efetividade-ndt');
                                                var pokeefetividadedirectionndtcontinner = [];







                                                for (k = 0; k < json.damage_relations.double_damage_from.length; k++) {
                                                    if (pokeefetividadedirectionndfcont.includes(json.damage_relations.double_damage_from[k].name)) { } else {
                                                        if (pokeefetividadedirectionddfcont.includes(json.damage_relations.double_damage_from[k].name)) { } else {

                                                            pokeefetividadedirectionddf.innerHTML += `<div class = "poke-flexer img-margin tipo-div ` + json.damage_relations.double_damage_from[k].name + "-ddf-div ddf" + `">` + `<div class = "imgTipos ` + json.damage_relations.double_damage_from[k].name + ` " id = "` + json.damage_relations.double_damage_from[k].name + `"><p class = "text-absolute text-tipos-img text-tipos-img-dd ` + json.damage_relations.double_damage_from[k].name + `-ddf` + `">x2</p><img class = " " src="images/` + json.damage_relations.double_damage_from[k].name + `.svg">` + `</div>` + `<p class = "tituloTipos texto-` + json.damage_relations.double_damage_from[k].name + `" > ` + `</div>`;
                                                            pokeefetividadedirectionddfcontinner[m] = json.damage_relations.double_damage_from[k].name;
                                                            pokeefetividadedirectionddfcont[m] = pokeefetividadedirectionddfcontinner[m];
                                                            m++;
                                                        }
                                                    }
                                                }


                                                for (l = 0; l < json.damage_relations.double_damage_to.length; l++) {
                                                    if (pokeefetividadedirectionndtcont.includes(json.damage_relations.double_damage_to[l].name)) { } else {
                                                        if (pokeefetividadedirectionddtcont.includes(json.damage_relations.double_damage_to[l].name)) {

                                                        } else {
                                                            pokeefetividadedirectionddt.innerHTML += `<div class = "poke-flexer img-margin tipo-div ` + json.damage_relations.double_damage_to[l].name + "-ddt-div ddt" + `">` + `<div class = "imgTipos ` + json.damage_relations.double_damage_to[l].name + ` " id = "` + json.damage_relations.double_damage_to[l].name + `"><p class = "text-absolute text-tipos-img text-tipos-img-dd ` + json.damage_relations.double_damage_to[l].name + `-ddt` + `">x2</p><img class = " " src="images/` + json.damage_relations.double_damage_to[l].name + `.svg">` + `</div>` + `<p class = "tituloTipos texto-` + json.damage_relations.double_damage_to[l].name + `" > ` + `</div>`;
                                                            pokeefetividadedirectionddtcontinner[b] = json.damage_relations.double_damage_to[l].name;
                                                            pokeefetividadedirectionddtcont[b] = pokeefetividadedirectionddtcontinner[b];
                                                            b++;
                                                        }
                                                    }
                                                }

                                                for (z = 0; z < json.damage_relations.half_damage_from.length; z++) {
                                                    if (pokeefetividadedirectionndfcont.includes(json.damage_relations.half_damage_from[z].name)) { } else {
                                                        if (pokeefetividadedirectionhdfcont.includes(json.damage_relations.half_damage_from[z].name)) {
                                                            document.querySelector("." + json.damage_relations.half_damage_from[z].name + '-hdf').innerHTML = "1/4";
                                                        } else if (pokeefetividadedirectionddfcont.includes(json.damage_relations.half_damage_from[z].name)) {
                                                            console.log("-----------");
                                                            console.log(json.damage_relations.half_damage_from);

                                                            document.querySelector("." + json.damage_relations.half_damage_from[z].name + '-ddf-div').classList.add("d-none");
                                                            pokeefetividadedirectionhdf.innerHTML += `<div class = "poke-flexer img-margin tipo-div d-none  ` + json.damage_relations.half_damage_from[z].name + "-hdf-div hdf" + ` ">` + `<div class = "imgTipos ` + json.damage_relations.half_damage_from[z].name + ` " id = "` + json.damage_relations.half_damage_from[z].name + `"><p class = "text-absolute  text-tipos-img-md ` + json.damage_relations.half_damage_from[z].name + `-hdf` + `">1/2</p><img class = " " src="images/` + json.damage_relations.half_damage_from[z].name + `.svg">` + `</div>` + `<p class = "tituloTipos texto-` + json.damage_relations.half_damage_from[z].name + `" > ` + `</div>`;


                                                        } else {
                                                            pokeefetividadedirectionhdf.innerHTML += `<div class = "poke-flexer img-margin tipo-div ` + json.damage_relations.half_damage_from[z].name + "-hdf-div hdf" + ` ">` + `<div class = "imgTipos ` + json.damage_relations.half_damage_from[z].name + ` " id = "` + json.damage_relations.half_damage_from[z].name + `"><p class = "text-absolute  text-tipos-img-md ` + json.damage_relations.half_damage_from[z].name + `-hdf` + `">1/2</p><img class = " " src="images/` + json.damage_relations.half_damage_from[z].name + `.svg">` + `</div>` + `<p class = "tituloTipos texto-` + json.damage_relations.half_damage_from[z].name + `" > ` + `</div>`;
                                                            pokeefetividadedirectionhdfcontinner[q] = json.damage_relations.half_damage_from[z].name;
                                                            pokeefetividadedirectionhdfcont[q] = pokeefetividadedirectionhdfcontinner[q];
                                                            q++;
                                                        }
                                                    }


                                                }


                                                for (x = 0; x < json.damage_relations.half_damage_to.length; x++) {

                                                    if (pokeefetividadedirectionndtcont.includes(json.damage_relations.half_damage_to[x].name)) { } else {
                                                        if (pokeefetividadedirectionhdtcont.includes(json.damage_relations.half_damage_to[x].name)) {

                                                            document.querySelector("." + json.damage_relations.half_damage_to[x].name + '-hdt').innerHTML = "1/4";
                                                        } else if (pokeefetividadedirectionddtcont.includes(json.damage_relations.half_damage_to[x].name)) {

                                                            document.querySelector("." + json.damage_relations.half_damage_to[x].name + '-ddt-div').classList.add("d-none");
                                                            pokeefetividadedirectionhdt.innerHTML += `<div class = "poke-flexer img-margin tipo-div d-none ` + json.damage_relations.half_damage_to[x].name + "-hdt-div hdt" + ` ">` + `<div class = "imgTipos ` + json.damage_relations.half_damage_to[x].name + ` " id = "` + json.damage_relations.half_damage_to[x].name + `"><p class = "text-absolute text-tipos-img text-tipos-img-md ` + json.damage_relations.half_damage_to[x].name + `-hdt` + `">1/2</p><img class = " " src="images/` + json.damage_relations.half_damage_to[x].name + `.svg">` + `</div>` + `<p class = "tituloTipos texto-` + json.damage_relations.half_damage_to[x].name + `" > ` + `</div>`;

                                                        } else {
                                                            pokeefetividadedirectionhdt.innerHTML += `<div class = "poke-flexer img-margin tipo-div ` + json.damage_relations.half_damage_to[x].name + "-hdt-div hdt" + ` ">` + `<div class = "imgTipos ` + json.damage_relations.half_damage_to[x].name + ` " id = "` + json.damage_relations.half_damage_to[x].name + `"><p class = "text-absolute text-tipos-img text-tipos-img-md ` + json.damage_relations.half_damage_to[x].name + `-hdt` + `">1/2</p><img class = " " src="images/` + json.damage_relations.half_damage_to[x].name + `.svg">` + `</div>` + `<p class = "tituloTipos texto-` + json.damage_relations.half_damage_to[x].name + `" > ` + `</div>`;
                                                            pokeefetividadedirectionhdtcontinner[w] = json.damage_relations.half_damage_to[x].name;
                                                            pokeefetividadedirectionhdtcont[w] = pokeefetividadedirectionhdtcontinner[w];
                                                            w++;
                                                        }

                                                    }


                                                }


                                                for (c = 0; c < json.damage_relations.no_damage_from.length; c++) {

                                                    pokeefetividadedirectionndf.innerHTML += `<div class = "poke-flexer img-margin tipo-div">` + `<div class = "imgTipos ` + json.damage_relations.no_damage_from[c].name + ` " id = "` + json.damage_relations.no_damage_from[c].name + `"><p class = "text-absolute text-tipos-img text-tipos-img-nd ` + json.damage_relations.no_damage_from[c].name + `-i` + `">x0</p><img class = " " src="images/` + json.damage_relations.no_damage_from[c].name + `.svg">` + `</div>` + `</div>`;
                                                    pokeefetividadedirectionndfcontinner[r] = json.damage_relations.no_damage_from[c].name;
                                                    pokeefetividadedirectionndfcont[r] = pokeefetividadedirectionndfcontinner[r];
                                                    r++;

                                                    if (pokeefetividadedirectionhdfcont.some(item2 => pokeefetividadedirectionndfcont.includes(item2))) { document.querySelector("." + json.damage_relations.no_damage_from[c].name + "-hdf-div".classList.add("d-none")); }

                                                }


                                                for (v = 0; v < json.damage_relations.no_damage_to.length; v++) {

                                                    pokeefetividadedirectionndt.innerHTML += `<div class = "poke-flexer img-margin tipo-div">` + `<div class = "imgTipos ` + json.damage_relations.no_damage_to[v].name + ` " id = "` + json.damage_relations.no_damage_to[v].name + `"><p class = "text-absolute text-tipos-img text-tipos-img-nd ` + json.damage_relations.no_damage_to[v].name + `-i` + `">x0</p><img class = " " src="images/` + json.damage_relations.no_damage_to[v].name + `.svg">` + `</div>` + `<p class = "tituloTipos texto-` + json.damage_relations.no_damage_to[v].name + `" > ` + `</div>`;
                                                    pokeefetividadedirectionndtcontinner[o] = json.damage_relations.no_damage_to[v].name;
                                                    pokeefetividadedirectionndtcont[o] = pokeefetividadedirectionndtcontinner[o];


                                                    if (pokeefetividadedirectionhdtcont.some(item => pokeefetividadedirectionndtcont.includes(item))) { document.querySelector("." + json.damage_relations.no_damage_to[v].name + "-hdt-div").classList.add("d-none"); }
                                                    o++;
                                                }


                                                for (ve = 0; ve < 20; ve++) {
                                                   
                                                   
                                                   if(pokeefetividadedirectionhdfcont.includes(pokeefetividadedirectionddfcont[ve])){
                                                    console.log("__________________/_-____________")
                                                    console.log(pokeefetividadedirectionddfcont[ve]);
                                                    console.log("__________________/_-____________")
                                                    document.querySelector("." + pokeefetividadedirectionddfcont[ve] + "-ddf-div" ).classList.add("d-none");
                                                    document.querySelector("." + pokeefetividadedirectionddfcont[ve] + "-hdf-div" ).classList.add("d-none");

                                                   }

                                                }







                                                var concatpokeefetivity1 = pokeefetividadedirectionddfcont.concat(pokeefetividadedirectionhdfcont, pokeefetividadedirectionndfcont);
                                                var concatpokeefetivity2 = pokeefetividadedirectionddtcont.concat(pokeefetividadedirectionhdtcont, pokeefetividadedirectionndtcont);
                                                


                                                var efetest = concatpokeefetivity2;


                                                var ind = [];
                                                var ind2 = [];
                                                // console.log(document.querySelectorAll(".d-none")[0].className);
                                                var pokeindentationL = document.querySelectorAll(".d-none.ddf,.d-none.hdf");

                                                var pokeindentationR = document.querySelectorAll(".d-none.ddt,.d-none.hdt");

                                                console.log(pokeindentationR);

                                                for (any = 0; any < pokeindentationR.length; any++) {
                                                    ind[any] = pokeindentationR[any].className;
                                                }

                                                for (any0 = 0; any0 < pokeindentationL.length; any0++) {
                                                    ind2[any0] = pokeindentationL[any0].className;
                                                }



                                                if (n === 1) {

                                                    console.log("Todos da esquerda (mesmo invisivel)");
                                                    console.log(concatpokeefetivity1);
                                                    console.log("Todos da direita (mesmo invisivel)");
                                                    console.log(concatpokeefetivity2);

                                                    var indentatorpoke = concatpokeefetivity2;
                                                    var indentatorpoke2 = concatpokeefetivity1;

                                                    function typednonefilteringt() {
                                                        for (any2 = 0; any2 < indentatorpoke.length; any2++) {



                                                            const match = ind.find(element => {
                                                                if (element.includes(concatpokeefetivity2[any2])) {
                                                                    return true;
                                                                }
                                                            });


                                                            // console.log(match);
                                                            if (match !== undefined) {

                                                                // concatpokeefetivity2.indexOf(any2);
                                                                // var indentpokeinner = concatpokeefetivity2.indexOf(any2);
                                                                //   console.log(concatpokeefetivity2);
                                                                //     concatpokeefetivity2.splice(any2, 1); // 2nd parameter means remove one item only



                                                                // concatpokeefetivity2.splice(any2, 1);


                                                                // concatpokeefetivity2 = concatpokeefetivity2.filter(function (n) { return n; });
                                                                concatpokeefetivity2 = concatpokeefetivity2.filter(function (item) {
                                                                    return item !== concatpokeefetivity2[any2]
                                                                })

                                                            }

                                                        }
                                                    }
                                                    typednonefilteringt();
                                                    typednonefilteringt();

                                                    function typednonefilteringf() {
                                                        for (any3 = 0; any3 < indentatorpoke2.length; any3++) {



                                                            const match = ind2.find(element => {
                                                                if (element.includes(concatpokeefetivity1[any3])) {
                                                                    return true;
                                                                }
                                                            });

                                                            if (match !== undefined) {

                                                                concatpokeefetivity1 = concatpokeefetivity1.filter(function (item) {
                                                                    return item !== concatpokeefetivity1[any3]
                                                                })

                                                            }

                                                        }
                                                    }
                                                    typednonefilteringf();
                                                    typednonefilteringf();
                                                }
                                                console.log(concatpokeefetivity2);
                                                console.log(concatpokeefetivity1);


                                                // for(con = 0; con <= concatpokeefetivity1; con++){
                                                //     document.getElementsByClassName()
                                                // }


                                                // console.log(ind);

                                                // var efetest = pokeefetividadedirectionhdtcont;

                                                // indexpoketype = efetest.indexOf('steel');
                                                // console.log(indexpoketype);
                                                // if( indexpoketype > -1){
                                                //     efetest.splice(indexpoketype, 1);
                                                // }
                                                // efetest = efetest.filter(function(n){return n; }); 
                                                // console.log("-");

                                                // console.log(efetest);
                                                // console.log("-");

                                                // for (alltypes = 0; altypes < 19; alltypes++) {

                                                //     // if () { } else {
                                                //     //     if (||) { } else {




                                                //     //     }
                                                //     // }

                                                // }

                                                n++;
                                            });

                                    }

                                }

                            }

                        }

                        pokeapitype2()



                    });


            }
            pokeEfetividadeCalc();




        });

}

var offsetter = 0;

function pokebaseadd() {

    offsetter += 7;


    pokebase();
}

function pokebaseremove() {

    if (offsetter > 0) {
        offsetter += -7;


        pokebase();


    } else {
        pokebase();


    }
}



function pokebaseclean() {
    offsetter = 0;

    QueryPokebasename = document.querySelector(".allpoke-base-name");
    QueryPokebaseid = document.querySelector(".allpoke-base-id");
    QueryPokebaseimg = document.querySelector(".allpoke-base-img");
    QueryPokebasename.innerHTML = ``;
    QueryPokebaseid.innerHTML = ``;
    QueryPokebaseimg.innerHTML = ``;
}


function pokebase() {

    QueryPokebasename = document.querySelector(".allpoke-base-name");
    QueryPokebaseid = document.querySelector(".allpoke-base-id");
    QueryPokebaseimg = document.querySelector(".allpoke-base-img");

    QueryPokebasename.innerHTML = ``;
    QueryPokebaseid.innerHTML = ``;
    QueryPokebaseimg.innerHTML = ``;

    async function fetchPoke() {

        for (p = (offsetter + 1); p <= (offsetter + 7); p++) {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(function (json) {


                    // var resutados = (json.results);
                    var CapitalizedName = json.name.charAt(0).toUpperCase() + json.name.slice(1);

                    // console.log(QueryPokebase);
                    QueryPokebasename.innerHTML += `<p class = "tituloNome1"> ` + CapitalizedName + `</p>`;

                    QueryPokebaseid.innerHTML += `<p class = "tituloId1"> ` + p + `</p>`;

                    QueryPokebaseimg.innerHTML += `<img src="` + json.sprites.front_default +
                        `" alt="" class="allpokebasemodify">`;


                    // QueryPokebaseid.innerHTML += `<img src="` + json. + `">`;

                });
        }
    }

    fetchPoke();

}






