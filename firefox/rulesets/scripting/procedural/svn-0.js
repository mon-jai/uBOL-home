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

// ruleset: svn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".HeaderSpotlight\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://bit.ly\\\"]\"}]]}"],["{\"selector\":\".js_article\",\"tasks\":[[\"if-not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\".strong\"}]]}],[\"spath\",\" > .widgetWrap\"]]}"],["{\"selector\":\"li.article\",\"tasks\":[[\"has-text\",\"Oglasno sporočilo\"]]}"]];

const hostnamesMap = new Map([["bolha.com",0],["siol.net",1],["monitor.si",2]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
