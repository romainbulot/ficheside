
// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('lettreW', function (page) {

  var countries = {
"waldénase":" n.f. waldenase P. Walden (Pauls Valdens en letton), chimiste letton émigré en Allemagne après 1917 (1896) → galactowaldénase ",
"waldénisation":" n.f. waldenisation Isomérisation qui inverse la configuration d’un carbone asymétrique. ",
"wallérienne (dégénérescence)":" l.f. wallerian degeneration Lésion de dégénérescence des axones séparés de leurs cellules nerveuses d’origine. Elle se produit en aval d’une lésion du nerf. A.V. Waller, physiologiste anglais (1850) ",
"wandering pacemaker":" l.angl. Trouble du rythme cardiaque dans lequel le centre de stimulation auriculaire se déplace de manière progressive, temporaire, pendant une courte durée, sans qu’il s’agisse d’extrasystolie et sans que s’établisse de façon durable un rythme idio-auriculaire ectopique. Ce trouble du rythme est bénin.  ",
"warfarine (syndrome foetal de la)":" l.m. fetal warfarin syndrome Syndrome caractérisé par des hémorragies foetales, une hypoplasie nasale et une atrophie optique. Les dérivés de la coumarine (warfarine) passent la barrière placentaire et donnent des hémorragies aux enfants dont les mères ont été soumises au traitement anticoagulant. J.G. Hall, pédiatre et généticienne américaine (1980) → anticoagulant (médicament) ",
"washout":" n. angl.  Elimination complète hors d’un organe d’une substance physiologique, d’une substance xénobiotique, d’un agent de contraste ou d’un produit donné. Le terme est surtout utilisé pour des mesures physiologiques (débits sanguins régionaux, élimination des gaz par les poumons) après introduction dans l’organisme d’une substance étrangère. Il est également utilisé en imagerie (scanner, IRM, échographie de contraste) pour caractériser différentes lésions tissulaires ou, autrefois, pour apprécier la vidange du haut appareil urinaire après administration de diurétiques. → rinçage (épreuve de). Étym. angl. washout:  lavage (wash:  nettoyer avec de l’eau, out:  hors de) mot traduisible par «rinçage» ",
"washout test":"   l. angl. m. → test de lavage rénal ",
"watt":" n.m. watt Unité internationale de mesure de puissance: un watt = un joule par seconde. L’expression watt-seconde est incorrecte, dire joule. En revanche, l’expression kilowatt-heure est usuelle: 1 kWh = 3600 kilojoules. J. Watt mécanicien et ingénieur écossais (1736-1819) → énergie ",
"weber (Wb)":" n.m. weber Il correspond à un tesla par m 2. W.E. Weber, physicien allemand (1804-1891) Sigle Wb → flux magnétique ",
"wedge":" anglicisme pour wedge resection coin Weech’s syndrome Anhidrose avec hypotrichose et anodontie. A.A. Weech, médecin américain (1929); J. Christ, médecin dentiste allemand (1913); A. Touraine, dermatologue français, membre de l’Académie de Médecine (1936); H.W. Siemens, dermatologue allemand (1937) → Christ-Siemens-Touraine (syndrome de) ",
"western blot":" angl. Immunoempreinte. → immuno-empreinte ",
"whartonite":" n.f. whartonitis Inflammation du canal de Wharton. ",
"wheezing":" n.m.angl. Sibilances de timbre variable, perceptibles à l’inspiration et à l’expiration, causées par un rétrécissement bronchique ou trachéal (sténose cicatricielle ou tumorale, corps étranger). Se rencontre dans la crise d’asthme et en cas d’accident allergique ou de tumeur bronchique (signe d’alarme en anesthésie). Étym. angl. to wheeze : avoir une respiration bruyante et sibilante (du vieux nordique hvæsa : chuinter (pousser le cri de la chouette) ",
"whewellite (calculs de)":" l.m.p. whewellite → lithiase calcique, lithiase urinaire ",
"whiplash":" n. angl. m. → coup de fouet ",
"white sponge naevus":" l.m. angl. → hamartome spongieux de la muqueuse buccale ",
"white spot disease":" l.m.angl. Affection caractérisée par la survenue de petites taches blanc nacré de quelques mm de diamètre, parfois déprimées, souples ou légèrement indurées, d’évolution très lente, pouvant confluer. Après que cette affection eut d’abord été identifiée comme étant une sclérodermie en gouttes, d’autres auteurs l’ont considérée comme un groupe englobant les sclérodermies en gouttes et le lichen scléro-atrophique cutané. En fait, dans la plupart des cas, ni l’aspect clinique, ni l’image histologique ne permettent de différencier la sclérodermie en gouttes du lichen scléro-atrophique: le terme white spot disease permet alors de définir ces situations nosologiques imprécises. J.C. Johnston et S. Sherwell, dermatologistes américains (1903) → lichen scléreux, sclérodermie en goutte Syn. Weissfleckenkrankheit ",
"windkessel (réservoir à air)":" l.m. Modèle physique proposé par Otto Frank pour représenter la chambre d’accumulation élastique que représente l’aorte à la sortie du ventricule gauche. L’intérêt de ce modèle est de fournir une bonne image de la restitution d’énergie aortique quand le flux ventriculaire est interrompu. O. Frank, physiologiste allemand (1899) ",
"wire loop ":" l.angl. → anse en fil de fer ",
"wiring ":" n. angl.m. Mode de traitement percutané des anévrismes artériels par introduction dans leur lumière à travers un cathéter d’un fil métallique mince et souple qui vient se pelotonner dans la cavité de l’anévrisme. On cherche par cette méthode à obtenir une thrombose massive de la poche anévrismale. Actuellement sont surtout des spires métalliques ( «coils» ) que l’on introduit dans la lumière anévrismale dans le même but. → coil ",
"wolffien":" adj. wolffian Qui se rapporte au corps ou au canal de Wolff. ",
"wood":" n.m.angl. Unité de résistance vasculaire où la pression est exprimée en mm Hg et le débit en L/mn. ",
"woolly hair naevus":" l.angl.m.  touchant des enfants de race blanche, se traduisant par l’apparition au cours de la petite enfance, sur le cuir chevelu, d’une ou plusieurs zones circons­crites  de cheveux crépus, laineux au toucher et difficiles à coiffer, les cheveux atteints étant habituellement plus fins et plus clairs que les autres. Les follicules pileux des zones atteintes sont incurvés et l’examen des tiges pilaires  met en évidence de façon inconstante des images de pili canaliculi  ou de pseudo pili torti; les sections transversales des cheveux sont souvent ovalaires,  triangulaires ou irrégulières. Des associations à des nævus pigmentaires ou  à des hamartomes épidermiques des membres, du cou et du cuir chevelu sont fréquentes. F. Wise, dermatologue américain (1927) → cheveux laineux (syndrome des) ",
"wrapping":" n. angl. m. → enveloppement des anévrismes ",
"wybutine":" n.f. wybutin Base atypique analogue à la guanine, qui en diffère par la fixation, sur les azotes 1 et amine du noyau, d’un acide aminé à 7 carbones ainsi que par plusieurs autres substituants méthylés, et qui en prend la place (en position 37 de la boucle de l’anticodon) dans certains acides ribonucléiques de transfert (ARNt de la phénylalanine de la levure). Le nucléoside correspondant est appelé wybutosine. → wybutosine ",
"wybutosine":" n.f. wybutosin. Ribonucléoside de la wybutine. → wybutine ",
"wirsungographie":" n.f. wirsungography Radiographie du conduit pancréatique (canal de Wirsung) après opacification peropératoire ou au cours d’une cholangio-pancréatographie rétrograde endoscopique. Syn. cholangiopancréatographie rétrograde endosco­pique ",
"wuchérériose":" n.f. lymphatic filariasis Filariose qui peut donner lieu à des complications graves (éléphantiasis, notamment) et qui est provoquée par  Wuchereria bancrofti (et sa variété pacifica). Elle est transmise par la piqure de certains moustiques, hôtes intermédiaires et vecteurs du parasite. À un stade initial, l’affection comprend des manifestations lymphatiques aigües (lymphangites des membres ou du scrotum, adénites superficielles). La phase chronique survient habituellement après une ou deux décennies. Elle est marquée par des complications (lymphoedème, chylurie, varices lymphatiques) dont certaines sont monstrueuses et très invalidantes (éléphantiasis des membres inférieurs et des organes génitaux externes). O. Wucherer, parasitologiste allemand (1820-1873) → filariose lymphatique Syn. bancroftose "
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
