
// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('lettreY', function (page) {

  var countries = {
"y (axe des)":" l.m y axis En biomécanique, axe frontal de gauche à droite. → x Étym. Avant-dernière lettre de l’alphabet latin utilisée pour transcrire l’ upsilon grec (dérivé du vau  phénicien, prononcé v ou ou) dont la prononciation grecque a varié au cours des siècles entre le ou archaïque, u et finalement i  depuis la fin de l’antiquité. ",
"yaws ":" n.m. → pian ",
"yellow nail syndrome":" l.m. → ongles jaunes ((syndrome des) ",
"ypérite ":" n.f. yperite Composé de synthèse de la série des thioéthers (sulfure de 2,2’-dichlorodiéthyle) à odeur d’ail, utilisé initialement le 11 juillet 1917 dans la région d’Ypres par l’armée allemande, puis largement par les belligérants jusqu’en 1918. Etym. Ypres (Belgique) Syn. gaz moutarde ",
"yersiniose":" n.f. yersinosis Maladie infectieuse due à une bactérie du genre Yersinia ( Yersinia enterocolitica, Y. pseudotuberculosis, Y. pestis, agent de la peste ). Les maladies provoquées par  Yersinia enterocolitica et  Yersinia pseudotuberculosis sont transmises par voie digestive à partir d’eau ou d’aliments contaminés par des excréments d’animaux (rongeurs, porcs, moutons, chèvres,...); elles peuvent se traduire par des manifestations abdominales (entérocolite aigüe, adénite mésentérique aigüe), des arthrites réactionnelles, un érythème polymorphe ou un érythème noueux et, chez les sujets immunodéprimés, par des localisations viscérales suppurées avec bactériémie. Le traitement consiste en une antibiothérapie par voie générale, parfois associée aux anti-inflammatoires. La peste, due à Y. pestis, est une zoonose dont le réservoir est représenté par les petits rongeurs sauvages et domestiques. Elle est transmise à l’homme par . la piqûre de puces. Une transmission interhumaine est possible, au cours d’une épidémie, en cas de peste pulmonaire. Cette maladie sévit surtout en milieu rural, en Asie Centrale, en Inde, en Chine, au Vietnam, en Afrique de l’Est, en Amérique du Sud.  A. J. E. Yersin (1863-1943), bactériologiste suisse devenu français → peste ",
"yeux vairons":" l.m.p. wall-eyed → vairons (yeux) Étym. lat. varius : varié, moucheté ",
"yoga":" n.m. yoga Technique de concentration mentale issue d’un système philosophique de l’Inde fondé selon la tradition par Patanjali au IIe siècle avant notre ère, qui faisait consister l’état parfait d’union avec un dieu suprême éternel dans la méditation, l’immobilité absolue, l’extase et les mortifications corporelles. Comme la méditation transcendantale, elle est pratiquée en dehors d’un cadre médical. Elle se présente actuellement comme la recherche du calme et de la maitrise de soi par un apprentissage sans effort, parfois très long, de postures et de mouvements respiratoires, destiné à un contrôle des fonctions vitales et à une détente mentale et musculaire. Les pratiquants du yoga font valoir des effets positifs sur leur état psychophysiologique, émotionnel, voire névrotique. → relaxation "
}
/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */

$(function () {
    'use strict';

    var countriesArray = $.map(countries, function (value, key) { return { value: key, data: value }; });

    // Setup jQuery ajax mock:
    $.mockjax({
        url: '*',
        responseTime: 2000,
        response: function (settings) {
            var query = settings.data.query,
            queryLowerCase = query.toLowerCase(),
            re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi'),
            suggestions = $.grep(countriesArray, function (country) {
                     // return country.value.toLowerCase().indexOf(queryLowerCase) === 0;
                     return re.test(country.value);
                 }),
            response = {
                query: query,
                suggestions: suggestions
            };

            this.responseText = JSON.stringify(response);
        }
    });

    // Initialize ajax autocomplete:
    $('#autocomplete-ajax').autocomplete({
        // serviceUrl: '/autosuggest/service/url',
        lookup: countriesArray,
         lookupLimit : 3,
        lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
            return re.test(suggestion.value);
        },
        onSelect: function(suggestion) {
            $('#selction-ajax').html('Mot : ' + suggestion.value + ', <br>' + suggestion.data);
        },
        onHint: function (hint) {
            $('#autocomplete-ajax-x').val(hint);
        },
        onInvalidateSelection: function() {
            $('#selction-ajax').html('Veuillez sélectionner un mot');
        }
    });

    
    // Initialize autocomplete with custom appendTo:
    $('#autocomplete-custom-append').autocomplete({
        lookup: countriesArray,
        appendTo: '#suggestions-container',
        lookupLimit : 3
    });

    // Initialize autocomplete with custom appendTo:
    $('#autocomplete-dynamic').autocomplete({
        lookup: countriesArray,
         lookupLimit : 3
    });
});

})
