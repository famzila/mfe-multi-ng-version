(function (window) {
    window['env'] = window['env'] || {};

    // Variables d'environnement
    window['env']['modeProd'] = 'true';
    window['env']['portailBackendUrl'] = 'portail-ws';
    window['env']['habilitationsBackendUrl'] = 'portail-ws';
    window['env']['portailFrontendUrl'] = 'http://localhost:4200/portail';
    window['env']['keycloak'] = {};
    window['env']['keycloak']['url'] = 'http://localhost:9081/';
    window['env']['keycloak']['realm'] = 'calypso-exemple-d';
    window['env']['keycloak']['clientId'] = 'calypso-exemple-front';
    window['env']['biFrontendUrl'] = 'http://localhost:4201/base-individu';
    window['env']['biBackendUrl'] = 'bip-baseindividu-ws';
    window['env']['cejFrontendUrl'] = 'http://localhost:4202/cej';
    window['env']['cejBackendUrl'] = 'cej-ws';
    window['env']['ordoFrontendUrl'] = 'http://localhost:4203/ordo';
    window['env']['ordoBackendUrl'] = 'ordonnancement-wp/ordonnancement/';
    window['env']['admfabFrontendUrl'] = 'http://localhost:4204/admfab';
    window['env']['aefChevBackendUrl'] = 'admfabchevauchement/';
    window['env']['aefRefBackendUrl'] = 'admfabreferentiels/';
    window['env']['aefRefConsoBackendUrl'] = 'admfabreferentiels/';
    window['env']['aefParamBackendUrl'] = 'parametres/';
    window['env']['controleFrontendUrl'] = 'http://localhost:4205/controle';
    window['env']['controleBackendUrl'] = 'controle-ws/';
})(this);