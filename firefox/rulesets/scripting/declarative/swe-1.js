/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: swe-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"section.huvudsektion\",\"action\":[\"style\",\"margin-top:unset!important\"]}"],["{\"selector\":\"body.didomi-popup-open\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\"html, body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow:initial!important\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"user-select:unset!important; -moz-user-select:unset!important; -webkit-user-select:unset!important;\"]}"],["{\"selector\":\".modal-open\",\"action\":[\"style\",\"overflow:initial!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y:initial!important\"]}"],["{\"selector\":\".cli-barmodal-open\",\"action\":[\"style\",\"overflow:auto!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow:auto!important;\"]}"],["{\"selector\":\"#page-container\",\"action\":[\"style\",\"user-select: auto !important;\"]}","{\"selector\":\".new-viewer-wrapper .p2hv\",\"action\":[\"style\",\"pointer-events: auto !important;\"]}","{\"selector\":\"div[data-page-no][style*=\\\"filter\\\"]\",\"action\":[\"style\",\"filter: none !important; user-select: auto !important;\"]}"],["{\"selector\":\".ad.adPanorama\",\"action\":[\"style\",\"height:100px!important; position:absolute!important;\"]}"],["{\"selector\":\".popup\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".body-fixed\",\"action\":[\"style\",\"position: unset !important;\"]}"],["{\"selector\":\"body > [class^=\\\"page-\\\"][style^=\\\"filter:\\\"]\",\"action\":[\"style\",\"filter:none!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"display:unset!important\"]}"],["{\"selector\":\".sp-message-open body\",\"action\":[\"style\",\"overflow:unset!important;position:unset!important;\"]}"],["{\"selector\":\".loading\",\"action\":[\"style\",\"opacity:1!important\"]}"],["{\"selector\":\".sp-message-open body\",\"action\":[\"style\",\"overflow:initial!important; position:unset!important; margin-top:unset!important;\"]}"],["{\"selector\":\".async-hide\",\"action\":[\"style\",\"opacity:1!important;\"]}"],["{\"selector\":\".noScroll, .noScroll body\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\".cdk-global-scrollblock\",\"action\":[\"style\",\"overflow-y: initial !important; position: unset !important;\"]}"],["{\"selector\":\".MediaWrapper-content\",\"action\":[\"style\",\"opacity:unset!important\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"--scrollbar-width:initial!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"opacity:1!important\"]}"],["{\"selector\":\".pum-open\",\"action\":[\"style\",\"overflow:auto!important\"]}"],["{\"selector\":\".attachmentPreviewActive img\",\"action\":[\"style\",\"-webkit-filter: none !important; filter: none !important;\"]}","{\"selector\":\"body.forum-logged-out .svartalistan-results-login-required\",\"action\":[\"style\",\"height: unset !important;\"]}"],["{\"selector\":\"*\",\"action\":[\"style\",\"user-select: auto !important;\"]}"],["{\"selector\":\"html::before\",\"action\":[\"style\",\"content: \\\"OBS! VARNING! Om denna sida är en butik så är det förmodligen en bluffbutik. Detta är ett meddelande från det svenska filtret i din annonsblockerare.\\\" !important; font-size: 18px !important; font-family: sans !important; background-color: red !important; color: white !important; padding: 6px !important; width: 100% !important; display: block !important; text-align: center !important;\"]}"],["{\"selector\":\".header-menu__wrapp\",\"action\":[\"style\",\"position:unset!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"position:unset!important;overflow-y:scroll!important;\"]}"],["{\"selector\":\".mediaconnect-protected-content, .mediaconnect-protected-content--show\",\"action\":[\"style\",\"max-height: unset !important; overflow: unset !important;\"]}","{\"selector\":\".mediaconnect-protected-content::after\",\"action\":[\"style\",\"background: unset !important;\"]}"],["{\"selector\":\".paywalled.hidden\",\"action\":[\"style\",\"display:unset!important\"]}"],["{\"selector\":\".tapet-popup-js-no-scroll, .tapet-no-scroll\",\"action\":[\"style\",\"overflow-y:initial!important; position:unset!important;\"]}"],["{\"selector\":\".mediaconnect-protected-content .Carousel\",\"action\":[\"style\",\"opacity:unset!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow:initial!important; position:initial!important;\"]}"],["{\"selector\":\"html.modal-cacsp-open\",\"action\":[\"style\",\"position:unset!important\"]}"],["{\"selector\":\".noScroll\",\"action\":[\"style\",\"overflow:initial!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\".idgcp__layer--active, .idgcp__layer--active body\",\"action\":[\"style\",\"overflow: initial !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"height:unset!important;\"]}"],["{\"selector\":\".wp-pagenavi\",\"action\":[\"style\",\"position:unset!important;z-index:unset!important\"]}"],["{\"selector\":\".thb-page-transition-on\",\"action\":[\"style\",\"opacity:1!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow:unset!important; position:unset!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\".js-preloader > .document, .js-preloader > .hero-section\",\"action\":[\"style\",\"opacity: 1 !important; visibility: visible !important;\"]}"],["{\"selector\":\"html, body\",\"action\":[\"style\",\"scrollbar-width:initial!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"opacity:unset!important\"]}"],["{\"selector\":\".lock-scroll\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\"#MoreLink_content-container\",\"action\":[\"style\",\"height:unset!important;\"]}","{\"selector\":\".thecontent, .entry-content\",\"action\":[\"style\",\"max-height: unset !important; overflow: initial !important; height: unset !important;\"]}","{\"selector\":\".wp-caption\",\"action\":[\"style\",\"display:initial!important\"]}"],["{\"selector\":\".overflow-hidden\",\"action\":[\"style\",\"overflow-y: initial !important;\"]}"],["{\"selector\":\"#piano\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\"body.modal-active\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\".recipe-modal[data-state=\\\"default\\\"] .modal-container.open, .recipe-modal[data-state=\\\"panorama\\\"] .modal-container.open\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\".site-wrapper[data-state=\\\"panorama\\\"], .site-wrapper[data-state=\\\"default\\\"]\",\"action\":[\"style\",\"padding-top: 40px !important;\"]}","{\"selector\":\"body.modal-active.modal-open::before, body.modal-active::before\",\"action\":[\"style\",\"opacity: unset !important; content: unset !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\".header-banner--regular, .app-banner\",\"action\":[\"style\",\"--banner-offset: 0 !important;\"]}"],["{\"selector\":\".no-scroll\",\"action\":[\"style\",\"overflow: initial !important;\"]}"],["{\"selector\":\".noscroll\",\"action\":[\"style\",\"overflow:initial!important\"]}"],["{\"selector\":\"html.g1-popup-visible\",\"action\":[\"style\",\"overflow: initial !important;\"]}"],["{\"selector\":\"div[data-testid=\\\"regionscloud-container\\\"] a, div[data-testid=\\\"taglist-container\\\"] a\",\"action\":[\"style\",\"background-attachment: none !important; background-image: none !important; background-color: rgb(2, 114, 140) !important;\"]}"],["{\"selector\":\"html, .unselectable\",\"action\":[\"style\",\"-moz-user-select:initial!important; -webkit-user-select:initial!important; -webkit-touch-callout:initial!important; user-select:initial!important; -webkit-tap-highlight-color:initial!important; cursor:initial!important;\"]}"],["{\"selector\":\"body.dimmed\",\"action\":[\"style\",\"overflow:unset!important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"-webkit-user-select: text !important; user-select: text !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"visibility:visible!important;\"]}"],["{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"overflow:initial!important\"]}"],["{\"selector\":\".single-article-related.single-article-related-short\",\"action\":[\"style\",\"height:unset!important; overflow:unset!important;\"]}","{\"selector\":\".single-article-related.single-article-related-short::after\",\"action\":[\"style\",\"background:unset!important;\"]}"],["{\"selector\":\".entry-content\",\"action\":[\"style\",\"display: initial !important;\"]}"],["{\"selector\":\".avod-web-player-pause\",\"action\":[\"style\",\"background-color:transparent!important;\"]}"],["{\"selector\":\".fancybox-lock\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\"body.newsletter-modal-open\",\"action\":[\"style\",\"overflow:unset!important;\"]}"]];

const hostnamesMap = new Map([["sjofart.ax",0],["avestatidning.com",1],["salaallehanda.com",1],["atl.nu",1],["st.nu",1],["allehanda.se",1],["arbetarbladet.se",1],["bandypuls.se",1],["bblat.se",1],["borlangetidning.se",1],["dalademokraten.se",1],["di.se",1],["dn.se",[1,29]],["expressen.se",[1,32]],["fagersta-posten.se",1],["falkopingstidning.se",1],["falukuriren.se",1],["gd.se",1],["hd.se",1],["ht.se",1],["jnytt.se",1],["jp.se",1],["kryddburken.se",1],["landlantbruk.se",1],["ljusdalsposten.se",1],["ljusnan.se",1],["lt.se",1],["ltz.se",1],["moratidning.se",1],["na.se",1],["netdoktorpro.se",1],["norrteljetidning.se",1],["nyaludvikatidning.se",1],["nynashamnsposten.se",1],["op.se",1],["skaraborgslanstidning.se",1],["skd.se",1],["skovdenyheter.se",1],["smalandsdagblad.se",1],["smalanningen.se",1],["smt.se",1],["soderhamnskuriren.se",1],["sodran.se",1],["sydsvenskan.se",1],["tidningenangermanland.se",1],["tidningenharjedalen.se",1],["tranastidning.se",1],["vastgotabladet.se",1],["vetlandaposten.se",1],["vlt.se",1],["vn.se",1],["bytbil.com",2],["cgi.com",3],["mabra.com",3],["bulletin.nu",3],["aftonbladet.se",[3,18]],["allas.se",3],["baaam.se",3],["dagensarena.se",3],["elle.se",3],["femina.se",3],["filmtopp.se",3],["fof.se",[3,30,33]],["folkofolk.se",3],["frida.se",3],["hant.se",3],["inredningsarkitektur.se",3],["kollega.se",3],["lchfarkivet.se",3],["motherhood.se",3],["residencemagazine.se",3],["skyscanner.se",3],["svenskdam.se",3],["xlbygg.se",3],["discoveringtheplanet.com",4],["entreprenad.com",5],["bicycling.se",5],["branschstegen.se",5],["cleannet.se",5],["dagenshandel.se",5],["food-supply.se",5],["foodnet.se",5],["fri-kopenskap.se",5],["habit.se",5],["kemivarldenbiotech.se",5],["lifesciencesweden.se",5],["medtechmagazine.se",5],["motormagasinet.se",5],["packnet.se",5],["plastnet.se",5],["processnet.se",5],["recyclingnet.se",5],["rt-forum.se",5],["runnersworld.se",5],["skogsforum.se",5],["transportnet.se",5],["uochd.se",5],["verkstaderna.se",5],["woodnet.se",5],["goteborg.com",6],["hejauppsala.com",7],["biostock.se",[7,24]],["karriarlakare.se",7],["morakniv.se",7],["svenskfilmdatabas.se",7],["petenkoiratarvike.com",8],["mustijamirri.fi",8],["arkenzoo.se",8],["vetzoo.se",8],["studocu.com",9],["sweclockers.com",10],["tasteline.com",11],["airam.fi",12],["icscards.nl",13],["dagenskalmar.nu",14],["dagenshultsfred.se",14],["dagensvastervik.se",14],["dagensvimmerby.se",14],["fasting.nu",15],["kuriren.nu",16],["corren.se",16],["ekuriren.se",16],["eposten.se",16],["folkbladet.se",16],["gotlandjustnu.se",16],["helagotland.se",16],["kindaposten.se",16],["kkuriren.se",16],["mvt.se",16],["norran.se",16],["nsd.se",16],["nt.se",16],["pt.se",16],["sn.se",16],["strengnastidning.se",16],["unt.se",16],["vimmerbytidning.se",16],["vt.se",16],["matochpyssel.nu",17],["godare.se",18],["livsstil.se",18],["skonhetsredaktorerna.se",18],["aktivtraning.se",[19,20]],["digitalfotoforalla.se",20],["iform.se",20],["illvet.se",20],["pctidningen.se",20],["popularhistoria.se",20],["viivilla.se",20],["vinbanken.se",[20,67]],["alkompis.se",21],["arkitekten.se",22],["biblioteksforeningen.se",23],["it-finans.se",24],["it-hallbarhet.se",24],["it-halsa.se",24],["it-kanalen.se",24],["it-pedagogen.se",24],["it-retail.se",24],["tobaksfakta.se",24],["byggahus.se",25],["byggipedia.se",26],["com.se",27],["dalarnasaffarer.se",28],["jamtlandsaffarer.se",28],["naringslivetvgl.se",28],["stockholmsaffarer.se",28],["elinstallatoren.se",30],["fokus.se",30],["modernpsykologi.se",30],["spraktidningen.se",30],["etc.se",31],["formas.se",34],["rf.se",34],["skogssallskapet.se",34],["futsalmagasinet.se",35],["shop.halebop.se",36],["hemnet.se",37],["samnytt.se",37],["idg.se",38],["forum.macworld.se",38],["idrottensaffarer.se",39],["improveme.se",40],["karinrahm.se",41],["kb.se",42],["kokaihop.se",43],["kultwatch.se",44],["kvinnatillkvinna.se",45],["livetsgoda.se",46],["livsmedelsverket.se",47],["ljudochbild.se",48],["matspar.se",49],["mestmotor.se",50],["modernalivet.se",51],["mytaste.se",52],["nongrata.se",53],["omni.se",54],["omniekonomi.se",54],["oru.se",55],["tui.se",55],["pricerunner.se",56],["pussad.se",57],["radio.se",58],["spelhubben.se",59],["sportbladetplay.se",60],["spray.se",61],["svd.se",62],["svenskahousegruppen.se",63],["thelocal.se",64],["tidningenridsport.se",65],["tv4play.se",66],["worldinproperty.se",68]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["www.com.se",[27]]]);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
