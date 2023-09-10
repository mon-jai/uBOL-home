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

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

// swe-1

const toImport = [[3407338,"#_ning_gdpr_approve"],[2640566,"#accept-cookies-div"],[5966067,"#ad-fullscreen:not(body):not(html)"],[16537908,"#ad-mega-container:not(body):not(html)"],[14618602,"#ad-wallpaper:not(body):not(html)"],[14904532,"#ad_topScroller:not(body):not(html)"],[7467429,"#advisa-iframe"],[8397176,"#aloq-cookie-warning"],[12279415,"#annons_head"],[11619812,"#bottomAnnonsBar"],[2340937,"#catapult-cookie-bar"],[5661487,"#cliSettingsPopup.cli-modal"],[9132611,"#colorbox.cookie-info-modal"],[14961625,"#cookie-alert"],[977851,"#cookie-banner"],[12452224,"#cookie-bar"],[581471,"#cookie-consent-banner"],[2489985,"#cookie-info"],[5982062,"#cookie-law-container"],[2489900,"#cookie-line"],[10932404,"#cookie-message"],[983813,"#cookie-notice"],[983833,"#cookie-policy"],[783004,"#cookie-policy-overlay"],[10936388,"#cookie-warning"],[6386027,"#cookie_approve_banner"],[10637445,"#cookie_consent"],[249279,"#cookie_prompt"],[7686891,"#cookieAcceptBar"],[2469789,"#cookieAlert"],[2134623,"#cookiebar"],[16240022,"#cookieChoiceInfo"],[2626976,"#CookieDialog"],[12450371,"#cookieinfo"],[16256628,"#cookieInfoBar"],[5156114,"#CookieInformationDialog"],[2926974,"#cookieInformerBooklet"],[2134359,"#cookiejar"],[419308,"#cookielawwarning"],[9847725,"#cookieMsgBlock"],[2612307,"#CookieNotice"],[14923699,"#cookieNotice"],[1993303,"#cookies-acceptance .alert.bottom"],[2452191,"#cookiesInfo"],[6467540,"#dialog-eu-cookie-law"],[14902916,"#div-leeadsFullpageAd"],[12134901,"#itc-cookie-notify.active"],[8991569,"#js-cookie-section.show"],[5815677,"#klaro .cookie-modal"],[8175970,"#leeads-panorama-container"],[16442444,"#moove_gdpr_cookie_info_bar"],[1285195,"#redim-cookiehint"],[15620377,"#redim-cookiehint-modal"],[9999431,"#RightOuterBannerDiv"],[8830454,"#strossle-below-article-thumbnails"],[11082482,"#topBannerAds"],[8964317,"._ning_outer._ning_jss_zone:not(body):not(html)"],[14542089,".ad-rotator:not(body):not(html)"],[6811294,".ad-single-news:not(body):not(html)"],[12252131,".ad_container_bottom:not(body):not(html)"],[9019188,".adContainer:not(body):not(html)"],[637145,".adrotate-group:not(body):not(html)"],[8812174,".adtoma_container:not(body):not(html)"],[7940887,".adtrue-holder:not(body):not(html)"],[15872750,".annons_mitten:not(body):not(html)"],[3196721,".annons_panorama:not(body):not(html)"],[4722515,".annonseArticle:not(body):not(html)"],[15420235,".b-ad__wrapper:not(body):not(html)"],[2688179,".b-cookies:not(body):not(html)"],[7568749,".bannerclick:not(body):not(html)"],[10913194,".c-ad-wrapper:not(body):not(html)"],[622414,".c-ad__floating:not(body):not(html)"],[4009266,".c-cookies.is-active:not(body):not(html)"],[3706626,".c-dfp_ads:not(body):not(html)"],[6418664,".c-post--native-ad:not(body):not(html)"],[9021974,".carrie-ad-block:not(body):not(html)"],[4585392,".casino-ad:not(body):not(html)"],[8618236,".category-annons:not(body):not(html)"],[12249051,".category-annonssamarbete:not(body):not(html)"],[425946,".category-om-samarbeten:not(body):not(html)"],[8385744,".category-samarbeten:not(body):not(html)"],[3259852,".category-sponsrad-artikel:not(body):not(html)"],[10279767,".category-sponsrad:not(body):not(html),.category-sponsrat:not(body):not(html)"],[3260573,".category-sponsrade-inlagg:not(body):not(html)"],[4147035,".category-sponsrade-reklaminlagg:not(body):not(html)"],[3243166,".category-sponsrat-content:not(body):not(html)"],[7558646,".category-sponsrat-inlagg:not(body):not(html)"],[13928613,".category-sponsrat-innehall:not(body):not(html)"],[1779092,".cc-banner.cc-bottom:not(body):not(html)"],[1801534,".cc-grower:not(body):not(html)"],[1770707,".cc-window.cc-floating:not(body):not(html)"],[7483090,".component-matchAds:not(body):not(html)"],[1243899,".component-matchAds__content:not(body):not(html)"],[177174,".Cookie-banner.is-open:not(body):not(html)"],[4720826,".cookie-consent:not(body):not(html)"],[11156680,".cookie-notice:not(body):not(html)"],[9104223,".cookie-notification:not(body):not(html)"],[13609647,".cookie__wrapper:not(body):not(html)"],[2235913,".cookie_consent_bar:not(body):not(html)"],[4326766,".cookie_popup_box:not(body):not(html)"],[11895866,".cookieConsent:not(body):not(html)"],[4858774,".dfp-ad-widget-class:not(body):not(html)"],[11129728,".dj-ad-size:not(body):not(html)"],[15934937,".esmg-hb-slot:not(body):not(html)"],[12482740,".favethemes-content-ad-bottom:not(body):not(html)"],[12482732,".favethemes-content-ad-inline:not(body):not(html)"],[6374869,".favethemes-content-ad-top:not(body):not(html)"],[16770867,".footer-ad-wrap:not(body):not(html)"],[7781282,".gdpr-banner:not(html):not(body)"],[6063330,".js-cookie-disclaimer:not(body):not(html)"],[1516748,".js-cookie-warning:not(body):not(html)"],[12581098,".layerAdContainer:not(body):not(html)"],[10548519,".lazyb.panorama"],[14251286,".leeads-advert:not(body):not(html)"],[1037838,".loop-mobile-leeads:not(body):not(html)"],[4360639,".mittenannons:not(body):not(html)"],[11554168,".node-sponsored-article:not(body):not(html)"],[72420,".nyhet_wrapper_annons:not(body):not(html)"],[9897668,".o-cookie-bar:not(body):not(html)"],[4574715,".o-grid__ad-column:not(body):not(html)"],[2610898,".p-cookie-prompt.-display:not(body):not(html)"],[6787489,".penci-adsense-below-slider:not(body):not(html)"],[972506,".penci-infeed-fullwidth-ads:not(body):not(html)"],[5618037,".plista_widget_outstream:not(body):not(html)"],[2757487,".react-ad:not(body):not(html)"],[6859378,".rmss_main-ad:not(body):not(html)"],[7998147,".sponsorBanner:not(body):not(html)"],[15352291,".sponsrad-artikel:not(body):not(html)"],[4692695,".stampenCookieContainer:not(html):not(body)"],[15579121,".sw-popular__article--ad:not(body):not(html)"],[1972431,".sw-sponsored_post:not(body):not(html)"],[14569690,".sw-tag-sponsored_post:not(body):not(html)"],[11488067,".swp-ad-strossle:not(body):not(html)"],[5729759,".tag-sponsrat-inlagg:not(body):not(html)"],[12956611,".teaser--native-ad:not(body):not(html)"],[10229390,".Teaser--nativeAd:not(body):not(html)"],[10679288,".thb_ad_header:not(body):not(html)"],[2092162,".toppannonser:not(body):not(html)"],[4312692,".widget_adonnews:not(body):not(html)"],[112794,".widget_eu_cookie_law_widget:not(body):not(html)"],[13508738,".widget_ev_ad_widget:not(body):not(html),.widget_ic_ad_widget:not(body):not(html)"],[10839172,"a#top-banner.banner-holder"],[6270360,"a.adv-link"],[1334494,"a.card.-sponsored"],[1054922,"a.is-native-ad"],[9214811,"article.annons"],[7712510,"article.article--sponsored"],[12779961,"article.article-list-item--sponsored-post"],[16250836,"article.article-sponsored"],[6368010,"article.category-partnerartikel"],[5603900,"article.category-promotion"],[8631626,"article.category-reklam"],[5609471,"article.category-samarbete"],[6786219,"article.category-samarbete-sponsrat"],[9624217,"article.category-samarbete-sponsrat-inlagg"],[16223198,"article.NativeTeaser"],[1928992,"article.sponsrad"],[9893738,"article.sponsrat-inlagg"],[8510652,"article.tag-adtraction"],[15412470,"article.tag-annons"],[12980391,"article.type-partnerartikel"],[8306265,"aside.ad-container"],[1089183,"aside.thb-cookie-bar"],[12019666,"aside.washer.loaded.displayed"],[13664737,"body[data-site-namespace=\"tailsweep\"] #premiumAdWrapper"],[11344569,"div#ad_global_below_navbar"],[2619388,"div#ads-panorama"],[6330361,"div#ads_column"],[12279465,"div#annons_topp"],[12846712,"div#banner_right"],[1853156,"div#block-adreviveheader"],[2135615,"div#cookieBar"],[13145640,"div#custom_ads_wrapper"],[11962707,"div#mega-ad-content"],[6331576,"div#outerAd"],[5017837,"div#outside-ads"],[1891090,"div#panorama_ad"],[6438057,"div#panoramaad"],[12134297,"div#reklam,td#reklam"],[9796473,"div#schibsted-data-controller-sticky"],[4512426,"div#sliding-popup div[class^=\"eu-cookie\"]"],[10833932,"div#toppannons"],[7557418,"div#topreklam"],[4343906,"div#zox-lead-bot"],[5135152,"div.ad-after-header"],[9970714,"div.ad-after-post"],[8302193,"div.ad-component"],[13456304,"div.ad-container-lg"],[9011898,"div.ad-panorama_dynamic-wrapper"],[2075533,"div.ad-toppbanner"],[1647817,"div.ad.container,div.ad.panorama"],[15158548,"div.adtech_slot"],[11134509,"div.advads-background"],[97724,"div.annons-yta"],[1813948,"div.annonsbox"],[7103448,"div.article-ad-container"],[7894150,"div.ashe-preloader-wrap"],[2916228,"div.bam-ad-wrapper"],[7484205,"div.banner-size.proad"],[14920830,"div.bbPrisjakt"],[76158,"div.better-ads-listitemad"],[885957,"div.big-desktop-ads"],[4334223,"div.big-mobile-ads"],[9486935,"div.block-bean-header-banner"],[4015355,"div.borka-ad"],[5179557,"div.box--squareAd"],[10364818,"div.brix-ads-by-posttype"],[4449960,"div.bs-wrap-gdpr-law"],[11014841,"div.bsa_pro_ajax_load"],[10213482,"div.cli-modal-backdrop"],[177509,"div.CMACG_AdChangerWidget"],[5058392,"div.column-article.tag-annons"],[12948800,"div.comment-ad_wrapper"],[16740474,"div.Container--ad"],[10534013,"div.content-center-ad"],[2192141,"div.content_ad_top"],[7767589,"div.cookie-block"],[10851661,"div.cookie-disclaimer"],[9241324,"div.cookie-info"],[13704732,"div.cookie-notification-show"],[7838510,"div.cookiebanner"],[4146450,"div.cookiebar"],[7825197,"div.CookieConsentBanner.is-active"],[9770222,"div.elementor-widget-wp-widget-adrotate_widgets"],[9758351,"div.elementor-widget-wp-widget-advads_ad_widget"],[13765009,"div.feed_ad"],[7510023,"div.fs-holid-live-widescreen"],[528057,"div.gdpr-warning.gdpr-warning-slide-up"],[9931177,"div.helsida-ad"],[4926550,"div.holidAds"],[6430096,"div.ilcc-cookie-consent-notice"],[8866320,"div.in-post-ad-wrap"],[994173,"div.js-top-banner-container"],[3965900,"div.l-footer__adtext"],[10783875,"div.leeads-wrapper-desktop"],[2237405,"div.link-ads"],[6506258,"div.medium-ad"],[1099112,"div.mgp-ads"],[2785602,"div.NativeAd"],[1900095,"div.navbar-ad-section"],[14781510,"div.novashare-buttons"],[15645509,"div.o-indenter--ad"],[3979921,"div.outsideAdsWrapper"],[6527949,"div.panorama-ad"],[2605958,"div.panorama-ad-standard"],[3395972,"div.panoramaAd"],[15954502,"div.phpbb-ads-center"],[5732329,"div.prebid-ad-slot"],[15588688,"div.sb-egmont-plugin"],[5715988,"div.sch-datacontroller--footer"],[12084020,"div.sch-datacontroller--subheader"],[5716222,"div.sch-datacontroller-default"],[12419342,"div.schibsted-info-sticky"],[13752985,"div.sgm-ad"],[3299412,"div.sgm-header-start-ad"],[15069926,"div.sgm-large-ad"],[5104617,"div.sidebar-item .banner-box"],[5184460,"div.sol-cookie-message"],[11338920,"div.strossle-widget"],[4938179,"div.td-a-rec img"],[878155,"div.td-more-articles-box"],[10453846,"div.topmost-banner"],[14522945,"div.toppannons"],[684294,"div.widget_widget_dfp"],[11183194,"div.wppasrotate"],[8058752,"footer .sponsors-area"],[4842101,"footer .ui-optin-wrapper"],[2221361,"ul.adsmodern"]];

const genericSelectorMap = self.genericSelectorMap || new Map();

if ( genericSelectorMap.size === 0 ) {
    self.genericSelectorMap = new Map(toImport);
    return;
}

for ( const toImportEntry of toImport ) {
    const existing = genericSelectorMap.get(toImportEntry[0]);
    genericSelectorMap.set(
        toImportEntry[0],
        existing === undefined
            ? toImportEntry[1]
            : `${existing},${toImportEntry[1]}`
    );
}

self.genericSelectorMap = genericSelectorMap;

/******************************************************************************/

})();

/******************************************************************************/
