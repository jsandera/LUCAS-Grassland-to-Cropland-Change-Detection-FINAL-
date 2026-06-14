var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AdministrativeBorders_1 = new ol.format.GeoJSON();
var features_AdministrativeBorders_1 = format_AdministrativeBorders_1.readFeatures(json_AdministrativeBorders_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrativeBorders_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrativeBorders_1.addFeatures(features_AdministrativeBorders_1);
var lyr_AdministrativeBorders_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrativeBorders_1, 
                style: style_AdministrativeBorders_1,
                popuplayertitle: 'Administrative Borders',
                interactive: true,
                title: '<img src="styles/legend/AdministrativeBorders_1.png" /> Administrative Borders'
            });
var format_E20_SELECTION_FINAL_2026_2 = new ol.format.GeoJSON();
var features_E20_SELECTION_FINAL_2026_2 = format_E20_SELECTION_FINAL_2026_2.readFeatures(json_E20_SELECTION_FINAL_2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E20_SELECTION_FINAL_2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E20_SELECTION_FINAL_2026_2.addFeatures(features_E20_SELECTION_FINAL_2026_2);
var lyr_E20_SELECTION_FINAL_2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E20_SELECTION_FINAL_2026_2, 
                style: style_E20_SELECTION_FINAL_2026_2,
                popuplayertitle: 'E20_SELECTION_FINAL_2026',
                interactive: true,
                title: '<img src="styles/legend/E20_SELECTION_FINAL_2026_2.png" /> E20_SELECTION_FINAL_2026'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AdministrativeBorders_1.setVisible(true);lyr_E20_SELECTION_FINAL_2026_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AdministrativeBorders_1,lyr_E20_SELECTION_FINAL_2026_2];
lyr_AdministrativeBorders_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'kod': 'kod', 'nazev': 'nazev', 'regionsoud': 'regionsoud', 'nutslau': 'nutslau', 'datumvznik': 'datumvznik', 'Poc_obyv_1': 'Poc_obyv_1', 'Poc_obyv_2': 'Poc_obyv_2', 'Poc_obyv_3': 'Poc_obyv_3', 'Poc_obyv_4': 'Poc_obyv_4', 'Poc_obyv_m': 'Poc_obyv_m', 'Poc_obyv_z': 'Poc_obyv_z', 'Poc_obyv_0': 'Poc_obyv_0', 'Poc_obyv_5': 'Poc_obyv_5', 'Poc_obyv_6': 'Poc_obyv_6', 'Poc_obyv_7': 'Poc_obyv_7', 'Poc_obyv_8': 'Poc_obyv_8', 'Poc_obyv_9': 'Poc_obyv_9', 'Poc_obyv_n': 'Poc_obyv_n', 'Poc_obyv10': 'Poc_obyv10', 'Poc_obyv11': 'Poc_obyv11', 'Prumerny_v': 'Prumerny_v', 'Prumerny_1': 'Prumerny_1', 'Prumerny_2': 'Prumerny_2', 'muzi_svobo': 'muzi_svobo', 'muzi_zenat': 'muzi_zenat', 'muzi_rozve': 'muzi_rozve', 'muzi_ovdov': 'muzi_ovdov', 'zeny_svobo': 'zeny_svobo', 'zeny_vdane': 'zeny_vdane', 'zeny_rozve': 'zeny_rozve', 'zeny_ovdov': 'zeny_ovdov', 'pocet_obyv': 'pocet_obyv', 'bez_vzdela': 'bez_vzdela', 'zakl_vzdel': 'zakl_vzdel', 'stredni_vz': 'stredni_vz', 'stredni__1': 'stredni__1', 'vyssi_odbo': 'vyssi_odbo', 'vysokoskol': 'vysokoskol', 'vzdelani_n': 'vzdelani_n', 'ceska_naro': 'ceska_naro', 'moravska_n': 'moravska_n', 'slezska_na': 'slezska_na', 'slovenska_': 'slovenska_', 'ukrajinska': 'ukrajinska', 'vietnamska': 'vietnamska', 'ostatní_n': 'ostatní_n', 'poc_obyv_S': 'poc_obyv_S', 'bez_naboze': 'bez_naboze', 'cirkev_ces': 'cirkev_ces', 'cirkev_rim': 'cirkev_rim', 'ceskobratr': 'ceskobratr', 'katolicka_': 'katolicka_', 'krestanstv': 'krestanstv', 'svedkove_j': 'svedkove_j', 'vira_neuve': 'vira_neuve', 'verici_hla': 'verici_hla', 'verici_neh': 'verici_neh', 'pravoslavn': 'pravoslavn', 'protestant': 'protestant', 'ostatni_vi': 'ostatni_vi', 'celkem_dom': 'celkem_dom', 'vlastnik_d': 'vlastnik_d', 'vlastnik_1': 'vlastnik_1', 'vlastnik_2': 'vlastnik_2', 'vlastnik_3': 'vlastnik_3', 'vlastnik_4': 'vlastnik_4', 'vlastnik_5': 'vlastnik_5', 'spoluvlast': 'spoluvlast', 'vystavba_p': 'vystavba_p', 'vystavba_1': 'vystavba_1', 'vystavba_2': 'vystavba_2', 'vystavba_3': 'vystavba_3', 'vystavba_4': 'vystavba_4', 'vystavba_5': 'vystavba_5', 'vystavba_6': 'vystavba_6', 'vystavba_7': 'vystavba_7', 'vystavba_8': 'vystavba_8', 'vystavba_n': 'vystavba_n', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_E20_SELECTION_FINAL_2026_2.set('fieldAliases', {'point_id': 'point_id', 'survey_dat': 'survey_dat', 'survey_d_1': 'survey_d_1', 'survey_d_2': 'survey_d_2', 'survey_d_3': 'survey_d_3', 'Change Vec': 'Change Vec', 'EVI': 'EVI', 'NDVI': 'NDVI', 'NDWI': 'NDWI', 'SP_INDICES': 'SP_INDICES', 'SP_BANDS': 'SP_BANDS', });
lyr_AdministrativeBorders_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'kod': 'TextEdit', 'nazev': 'TextEdit', 'regionsoud': 'TextEdit', 'nutslau': 'TextEdit', 'datumvznik': 'TextEdit', 'Poc_obyv_1': 'TextEdit', 'Poc_obyv_2': 'TextEdit', 'Poc_obyv_3': 'TextEdit', 'Poc_obyv_4': 'TextEdit', 'Poc_obyv_m': 'TextEdit', 'Poc_obyv_z': 'TextEdit', 'Poc_obyv_0': 'TextEdit', 'Poc_obyv_5': 'TextEdit', 'Poc_obyv_6': 'TextEdit', 'Poc_obyv_7': 'TextEdit', 'Poc_obyv_8': 'TextEdit', 'Poc_obyv_9': 'TextEdit', 'Poc_obyv_n': 'TextEdit', 'Poc_obyv10': 'TextEdit', 'Poc_obyv11': 'TextEdit', 'Prumerny_v': 'TextEdit', 'Prumerny_1': 'TextEdit', 'Prumerny_2': 'TextEdit', 'muzi_svobo': 'TextEdit', 'muzi_zenat': 'TextEdit', 'muzi_rozve': 'TextEdit', 'muzi_ovdov': 'TextEdit', 'zeny_svobo': 'TextEdit', 'zeny_vdane': 'TextEdit', 'zeny_rozve': 'TextEdit', 'zeny_ovdov': 'TextEdit', 'pocet_obyv': 'TextEdit', 'bez_vzdela': 'TextEdit', 'zakl_vzdel': 'TextEdit', 'stredni_vz': 'TextEdit', 'stredni__1': 'TextEdit', 'vyssi_odbo': 'TextEdit', 'vysokoskol': 'TextEdit', 'vzdelani_n': 'TextEdit', 'ceska_naro': 'TextEdit', 'moravska_n': 'TextEdit', 'slezska_na': 'TextEdit', 'slovenska_': 'TextEdit', 'ukrajinska': 'TextEdit', 'vietnamska': 'TextEdit', 'ostatní_n': 'TextEdit', 'poc_obyv_S': 'TextEdit', 'bez_naboze': 'TextEdit', 'cirkev_ces': 'TextEdit', 'cirkev_rim': 'TextEdit', 'ceskobratr': 'TextEdit', 'katolicka_': 'TextEdit', 'krestanstv': 'TextEdit', 'svedkove_j': 'TextEdit', 'vira_neuve': 'TextEdit', 'verici_hla': 'TextEdit', 'verici_neh': 'TextEdit', 'pravoslavn': 'TextEdit', 'protestant': 'TextEdit', 'ostatni_vi': 'TextEdit', 'celkem_dom': 'TextEdit', 'vlastnik_d': 'TextEdit', 'vlastnik_1': 'TextEdit', 'vlastnik_2': 'TextEdit', 'vlastnik_3': 'TextEdit', 'vlastnik_4': 'TextEdit', 'vlastnik_5': 'TextEdit', 'spoluvlast': 'TextEdit', 'vystavba_p': 'TextEdit', 'vystavba_1': 'TextEdit', 'vystavba_2': 'TextEdit', 'vystavba_3': 'TextEdit', 'vystavba_4': 'TextEdit', 'vystavba_5': 'TextEdit', 'vystavba_6': 'TextEdit', 'vystavba_7': 'TextEdit', 'vystavba_8': 'TextEdit', 'vystavba_n': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_E20_SELECTION_FINAL_2026_2.set('fieldImages', {'point_id': 'TextEdit', 'survey_dat': 'DateTime', 'survey_d_1': 'DateTime', 'survey_d_2': 'DateTime', 'survey_d_3': 'DateTime', 'Change Vec': 'TextEdit', 'EVI': '', 'NDVI': '', 'NDWI': '', 'SP_INDICES': '', 'SP_BANDS': '', });
lyr_AdministrativeBorders_1.set('fieldLabels', {'OBJECTID': 'no label', 'kod': 'no label', 'nazev': 'no label', 'regionsoud': 'no label', 'nutslau': 'no label', 'datumvznik': 'no label', 'Poc_obyv_1': 'no label', 'Poc_obyv_2': 'no label', 'Poc_obyv_3': 'no label', 'Poc_obyv_4': 'no label', 'Poc_obyv_m': 'no label', 'Poc_obyv_z': 'no label', 'Poc_obyv_0': 'no label', 'Poc_obyv_5': 'no label', 'Poc_obyv_6': 'no label', 'Poc_obyv_7': 'no label', 'Poc_obyv_8': 'no label', 'Poc_obyv_9': 'no label', 'Poc_obyv_n': 'no label', 'Poc_obyv10': 'no label', 'Poc_obyv11': 'no label', 'Prumerny_v': 'no label', 'Prumerny_1': 'no label', 'Prumerny_2': 'no label', 'muzi_svobo': 'no label', 'muzi_zenat': 'no label', 'muzi_rozve': 'no label', 'muzi_ovdov': 'no label', 'zeny_svobo': 'no label', 'zeny_vdane': 'no label', 'zeny_rozve': 'no label', 'zeny_ovdov': 'no label', 'pocet_obyv': 'no label', 'bez_vzdela': 'no label', 'zakl_vzdel': 'no label', 'stredni_vz': 'no label', 'stredni__1': 'no label', 'vyssi_odbo': 'no label', 'vysokoskol': 'no label', 'vzdelani_n': 'no label', 'ceska_naro': 'no label', 'moravska_n': 'no label', 'slezska_na': 'no label', 'slovenska_': 'no label', 'ukrajinska': 'no label', 'vietnamska': 'no label', 'ostatní_n': 'no label', 'poc_obyv_S': 'no label', 'bez_naboze': 'no label', 'cirkev_ces': 'no label', 'cirkev_rim': 'no label', 'ceskobratr': 'no label', 'katolicka_': 'no label', 'krestanstv': 'no label', 'svedkove_j': 'no label', 'vira_neuve': 'no label', 'verici_hla': 'no label', 'verici_neh': 'no label', 'pravoslavn': 'no label', 'protestant': 'no label', 'ostatni_vi': 'no label', 'celkem_dom': 'no label', 'vlastnik_d': 'no label', 'vlastnik_1': 'no label', 'vlastnik_2': 'no label', 'vlastnik_3': 'no label', 'vlastnik_4': 'no label', 'vlastnik_5': 'no label', 'spoluvlast': 'no label', 'vystavba_p': 'no label', 'vystavba_1': 'no label', 'vystavba_2': 'no label', 'vystavba_3': 'no label', 'vystavba_4': 'no label', 'vystavba_5': 'no label', 'vystavba_6': 'no label', 'vystavba_7': 'no label', 'vystavba_8': 'no label', 'vystavba_n': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_E20_SELECTION_FINAL_2026_2.set('fieldLabels', {'point_id': 'inline label - always visible', 'survey_dat': 'inline label - always visible', 'survey_d_1': 'inline label - always visible', 'survey_d_2': 'inline label - always visible', 'survey_d_3': 'inline label - always visible', 'Change Vec': 'inline label - always visible', 'EVI': 'inline label - always visible', 'NDVI': 'inline label - always visible', 'NDWI': 'inline label - always visible', 'SP_INDICES': 'inline label - always visible', 'SP_BANDS': 'inline label - always visible', });
lyr_E20_SELECTION_FINAL_2026_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});