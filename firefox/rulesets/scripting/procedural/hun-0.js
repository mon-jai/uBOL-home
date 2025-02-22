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

// ruleset: hun-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .ai-attributes + script + ins\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"a2blckLayer\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"adblocker\"]]}"],["{\"selector\":\"div.right-rail\",\"tasks\":[[\"has\",{\"selector\":\"div.ad-wrapper\"}]]}","{\"selector\":\"figure\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"ignshop.hu\\\"]\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"script + ins\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"testadblock\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"hirdetes\\\"]\"}]]}","{\"selector\":\"div.item\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"hirdetes\\\"]\"}]]}"],["{\"selector\":\".whiteBox\",\"tasks\":[[\"has\",{\"selector\":\".goAdverticum\"}]]}"],["{\"selector\":\"div#mymodal\",\"tasks\":[[\"has\",{\"selector\":\"#form-popup\"}]]}"],["{\"selector\":\".ez-egy-dc-doboz\",\"tasks\":[[\"has\",{\"selector\":\"> .double_click_doboz\"}]]}"],["{\"selector\":\"p + center\",\"tasks\":[[\"has\",{\"selector\":\"iframe[data-src*=\\\"facebook\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .fb-like\"}]]}"],["{\"selector\":\".hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"> .lablec_alatt\"}]]}","{\"selector\":\".hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"> .weboldal_felett\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".otw-sidebar\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"https://bpiautosok.hu/tamogatonk-a-te-ceged-jelenj-meg-nalunk-a-youtube-on-es-a-bpiautosok-hu-n/\\\"]\"}]]}","{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"h3w\",\"tasks\":[[\"has-text\",\"Támogatóink\"]]}]]}","{\"selector\":\".widget.widget_text\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\"[class*=\\\"item_container\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"_tag\\\"]\",\"tasks\":[[\"has-text\",\"hirdetés\"]]}]]}","{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"https://bpiautosok.hu/mediaajanlat\\\"]\"}],[\"spath\",\" + br\"]]}","{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"https://bpiautosok.hu/mediaajanlat\\\"]\"}]]}","{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"> font\"}]]}"],["{\"selector\":\"div[class*=\\\"widget\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .widgettitle\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}","{\"selector\":\"div[class*=\\\"widget\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .widgettitle\",\"tasks\":[[\"has-text\",\"Állásajánlat\"]]}]]}"],["{\"selector\":\".sb-widget\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.onload = window.onfocus\"]]}"],["{\"selector\":\".row\",\"tasks\":[[\"has\",{\"selector\":\"> #onet-ad-top\"}]]}","{\"selector\":\".wrapRectangle\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}","{\"selector\":\"div.wrapRectangle\",\"tasks\":[[\"has\",{\"selector\":\"#ad-cikk\"}]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"Quantcast Choice\"]]}"],["{\"selector\":\".cikk-torzs [data-miniapp-id]\",\"tasks\":[[\"has\",{\"selector\":\".femina-shop-ajanlo-slider-hirdetes\"}]]}","{\"selector\":\".cikk-torzs [data-miniapp-id]\",\"tasks\":[[\"has\",{\"selector\":\".lapozgato-ajanlo\"}]]}","{\"selector\":\".szelso-jobb > div\",\"tasks\":[[\"has\",{\"selector\":\"> a\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> [style*=\\\"calc\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> h4 + div[style*=\\\"calc\\\"]\"}]]}"],["{\"selector\":\"div#center\",\"tasks\":[[\"has\",{\"selector\":\"div > div > p > a[style=\\\"color: #b42223;\\\"]\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"cli_cookiebar_\"]]}"],["{\"selector\":\"div[style*=\\\"text-align\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a > img\"}]]}","{\"selector\":\"td.txtcenter\",\"tasks\":[[\"has\",{\"selector\":\"> script + ins\"}]]}"],["{\"selector\":\".mc-modal\",\"tasks\":[[\"has\",{\"selector\":\"iframe\"}]]}","{\"selector\":\"[id^=\\\"um-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".fb-page.fb_iframe_widget\"}]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ai_run_\"]]}"],["{\"selector\":\"div.row\",\"tasks\":[[\"has\",{\"selector\":\"> div.ads\"}]]}"],["{\"selector\":\".hover_bkgr_fricc\",\"tasks\":[[\"has\",{\"selector\":\".facebookPopupCloseButton\"}]]}"],["{\"selector\":\".frame\",\"tasks\":[[\"has\",{\"selector\":\"> span[style^=\\\"font-size: 11px;\\\"]\"}]]}"],["{\"selector\":\"#league-selector + .row + .row\",\"tasks\":[[\"has\",{\"selector\":\".banner\"}]]}"],["{\"selector\":\".ik\",\"tasks\":[[\"has-text\",\"/^[Hh]irdetés$/\"]]}"],["{\"selector\":\"#sitemodal\",\"tasks\":[[\"has\",{\"selector\":\".fb-button\"}]]}"],["{\"selector\":\"div[style*=\\\"margin-bottom:10px\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"HIRDETÉS\"]]}]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\".widgettitle > span\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> a + h6\"}]]}"],["{\"selector\":\".frip-inline\",\"tasks\":[[\"has\",{\"selector\":\"[data-module-name=\\\"inline-article\\\"]\"}]]}"],["{\"selector\":\"div.lol\",\"tasks\":[[\"has\",{\"selector\":\"> a[onclick=\\\"getValue()\\\"]\"}]]}","{\"selector\":\"div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > p > script\"}]]}"],["{\"selector\":\"div[class=\\\"container-full\\\"][style=\\\"background:#fff\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".topadv\"}]]}"],["{\"selector\":\".sub-text\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"display: block !important;\"],\"tasks\":[[\"has\",{\"selector\":\"> .background.height\"}],[\"spath\",\" .notation\"]]}","{\"selector\":\"body\",\"action\":[\"style\",\"margin-top: 610px !important;\"],\"tasks\":[[\"has\",{\"selector\":\"> [class=\\\"background\\\"]\"}],[\"spath\",\" footer\"]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"> div + ins.adsbygoogle + script\"}]]}"],["{\"selector\":\".m-breakingLayer\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"nlc.hu/balkonfanatik\\\"]\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"popUpBannerBox Ad300 hirdetes_box\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"fbmodal-title\"]]}"],["{\"selector\":\"[id^=\\\"tie-block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".stream-title\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.atob\"]]}"],["{\"selector\":\".row\",\"tasks\":[[\"has\",{\"selector\":\".mainTopBnr\"}]]}"],["{\"selector\":\"[style]\",\"tasks\":[[\"has\",{\"selector\":\".adslot_1\"}]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ShadowRoot\"]]}"]];

const hostnamesMap = new Map([["harmonikum.co",0],["hazipatika.com",1],["24.hu",1],["hungliaonline.com",2],["hu.ign.com",3],["najlepsie-clanky.com",4],["openspeedtest.com",5],["444.hu",6],["ado.hu",7],["agrarszektor.hu",8],["agroinform.hu",9],["autosjog.hu",10],["azonnali.hu",11],["bien.hu",12],["blikkruzs.blikk.hu",13],["bpiautosok.hu",14],["budapestkornyeke.hu",15],["cyberpress.hu",16],["divany.hu",17],["totalbike.hu",17],["totalcar.hu",17],["egeszsegkalauz.hu",18],["femina.hu",19],["fototrend.hu",20],["gamepod.hu",[20,21,22]],["hardverapro.hu",[20,21]],["itcafe.hu",[20,21,22]],["mobilarena.hu",[20,21,22]],["prohardver.hu",[20,21,22]],["logout.hu",[21,22]],["gamer.hu",23],["gyakorikerdesek.hu",24],["hang.hu",25],["magyarhang.org",25],["hetek.hu",26],["hirado.hu",27],["hiros.hu",28],["hunbasket.hu",29],["kosarsport.hu",29],["idokep.hu",30],["infostart.hu",31],["kezilabda.hu",32],["kiszamolo.hu",33],["koroshircentrum.hu",34],["life.hu",35],["lifestory.hu",36],["mafab.hu",37],["mandiner.hu",38],["menetrendek.hu",39],["napjainkportal.hu",40],["nlc.hu",41],["port.hu",42],["portfolio.hu",43],["szeged365.hu",44],["szeretlekmagyarorszag.hu",45],["ugytudjuk.hu",46],["filmvilag.me",47]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
