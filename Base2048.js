(function($) // début du pluggin
{
    $.fn.game2048 = function() //function game2048 du pluggin
    {
        // génération du tableau (table, tr, td) vide (rempli de zéros)
        function generate_map()
        {
            var table = $('<table></table>');
            for (var y = 0; y < 4; y++)
            {
                var ligne = $('<tr></tr>');
                for (var x = 0; x < 4; x++)
                {
                    var cases = $('<td>0</td>').attr('x', x).attr('y', y).attr('nbr', 0);
                    ligne.append(cases);
                }
                table.append(ligne);
            }
            return table;
        }

        // génération d'un certain nombre de cases (argument cases) aléatoirement placées sur les cases d'attribut 'nbr=0'
        function generate_case(cases)
        {
            for (var i = 0; i < cases; i++)
            {
                var x = Math.floor((Math.random() * 4));
                var y = Math.floor((Math.random() * 4));
                var value =  2 * (Math.floor((Math.random() * 2) + 1));
                var elem = $('[x="' + x + '"][y="' + y + '"][nbr=0]');

                if (value === 4 && Math.random() > 0.5)
                    value = 2;
                if (!elem[0])
                    generate_case(1);
                else {
                    elem.attr('nbr', value);
                    elem.text(value);
                }
            }
        }

        // fonction de gestion des évenements (appuie de touches)
        $('html').keydown(function(event) {
                    // console.log(event.target)
            switch (event['key']) {
                case 'ArrowLeft':
                    // insérer algo move left
                    var elem = $('table tr:first-child');
                    elem.css({"background-color": "yellow", "font-size": "200%"})   
                    break;
                case 'ArrowUp':
                    // insérer algo move up
                    var elem = $('table tr:first-child').prev().insertAfter(elem);
                    elem.css({"background-color": "green", "font-size": "200%"})
                   
                    break;
                case 'ArrowRight':
                    // insérer algo move right
                    var elem = $('table tr:first-child');
                    elem.css({"background-color": "red", "font-size": "200%"})
                    console.log("Right");
                    break;
                case 'ArrowDown':
                    // insérer algo move down
                    var elem = $('table tr:first-child');
                    elem.css({"background-color": "black", "font-size": "200%"})
                    console.log("Down");
                    break;
            }
        });

        // début du code lancé
        $(this).append(generate_map()); // génération du tableau vide
        generate_case(2); // génération aléatoire de deux cases pleines (2 ou 4)
    }

})(jQuery); // fin du pluggin