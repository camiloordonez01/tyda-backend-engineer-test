const GetRestaurantsByLatLng = require('../GetRestaurantsByLatLng')

jest.mock('../../../infrastructure/externalRepository')

describe('GetRestaurantsByLatLng', () => {
    it('Restaurantes obtenidos exitosamente', async () => {
        const response = await GetRestaurantsByLatLng('4.7576142', '-75.9347')
        expect(response).toEqual([
            {
                location_id: '24006645',
                name: 'Bbc Bodega Nuestro Cartago',
                latitude: '4.757216',
                longitude: '-75.933395',
                num_reviews: '0',
                timezone: 'America/Bogota',
                location_string: 'Cartago, Valle del Cauca Department',
                awards: [],
                doubleclick_zone: 'sa.colombia',
                preferred_map_engine: 'default',
                distance: '0.15133152156276442',
                distance_string: '0.2 km',
                bearing: 'east',
                is_closed: false,
                is_long_closed: false,
                price_level: '',
                description:
                    'En la variedad está el placer. Contamos con una amplia variedad de estilos de cerveza para que disfrute su favorita, o porqué no, para que se arriesgue a probar una nueva como nuestra cerveza de temporada. Además tenemos cócteles y bebidas sin alcohol.',
                web_url:
                    'https://www.tripadvisor.com/Restaurant_Review-g910883-d24006645-Reviews-Bbc_Bodega_Nuestro_Cartago-Cartago_Valle_del_Cauca_Department.html',
                write_review:
                    'https://www.tripadvisor.com/UserReview-g910883-d24006645-Bbc_Bodega_Nuestro_Cartago-Cartago_Valle_del_Cauca_Department.html',
                ancestors: [
                    {
                        subcategory: [
                            {
                                key: 'city',
                                name: 'City',
                            },
                        ],
                        name: 'Cartago',
                        abbrv: null,
                        location_id: '910883',
                    },
                    {
                        subcategory: [
                            {
                                key: 'department',
                                name: 'Department',
                            },
                        ],
                        name: 'Valle del Cauca Department',
                        abbrv: null,
                        location_id: '2021548',
                    },
                    {
                        subcategory: [
                            {
                                key: 'country',
                                name: 'Country',
                            },
                        ],
                        name: 'Colombia',
                        abbrv: null,
                        location_id: '294073',
                    },
                ],
                category: {
                    key: 'restaurant',
                    name: 'Restaurant',
                },
                subcategory: [],
                parent_display_name: 'Cartago',
                is_jfy_enabled: false,
                nearest_metro_station: [],
                reviews: [null],
                phone: '+57 321 3040238',
                website: 'http://www.bbccerveceria.com/',
                address_obj: {
                    street1: 'Centro Comercial Nuestro Cartago',
                    street2: 'Bbc La Bodega',
                    city: 'Cartago',
                    state: null,
                    country: 'Colombia',
                    postalcode: null,
                },
                address:
                    'Centro Comercial Nuestro Cartago Bbc La Bodega, Cartago Colombia',
                is_candidate_for_contact_info_suppression: false,
                cuisine: [
                    {
                        key: '10670',
                        name: 'Pub',
                    },
                    {
                        key: '10683',
                        name: 'Gastropub',
                    },
                ],
                dietary_restrictions: [],
                establishment_types: [
                    {
                        key: '11776',
                        name: 'Bars & Pubs',
                    },
                    {
                        key: '10591',
                        name: 'Restaurants',
                    },
                ],
            },
            {
                location_id: '23866299',
                name: 'Lenos & Carbon Nuestro Cartago',
                latitude: '4.757349',
                longitude: '-75.93313',
                num_reviews: '1',
                timezone: 'America/Bogota',
                location_string: 'Cartago, Valle del Cauca Department',
                photo: {
                    images: {
                        small: {
                            width: '150',
                            url: 'https://media-cdn.tripadvisor.com/media/photo-l/22/c3/10/72/tomawahk.jpg',
                            height: '150',
                        },
                        thumbnail: {
                            width: '50',
                            url: 'https://media-cdn.tripadvisor.com/media/photo-t/22/c3/10/72/tomawahk.jpg',
                            height: '50',
                        },
                        original: {
                            width: '1080',
                            url: 'https://media-cdn.tripadvisor.com/media/photo-o/22/c3/10/72/tomawahk.jpg',
                            height: '1080',
                        },
                        large: {
                            width: '550',
                            url: 'https://media-cdn.tripadvisor.com/media/photo-p/22/c3/10/72/tomawahk.jpg',
                            height: '550',
                        },
                        medium: {
                            width: '450',
                            url: 'https://media-cdn.tripadvisor.com/media/photo-s/22/c3/10/72/tomawahk.jpg',
                            height: '450',
                        },
                    },
                    is_blessed: true,
                    uploaded_date: '2022-03-31T13:48:19-0400',
                    caption: 'Tomawahk',
                    id: '583209074',
                    helpful_votes: '0',
                    published_date: '2022-03-31T13:48:19-0400',
                    user: {
                        user_id: null,
                        member_id: '0',
                        type: 'user',
                    },
                },
                awards: [],
                doubleclick_zone: 'sa.colombia',
                preferred_map_engine: 'default',
                raw_ranking: '2.676466226577759',
                ranking_geo: 'Cartago',
                ranking_geo_id: '910883',
                ranking_position: '37',
                ranking_denominator: '41',
                ranking_category: 'restaurant',
                ranking: '#35 of 54 Restaurants in Cartago',
                distance: '0.1767945027466443',
                distance_string: '0.2 km',
                bearing: 'east',
                rating: '1.0',
                is_closed: false,
                open_now_text: 'Open Now',
                is_long_closed: false,
                price_level: '$',
                price: '$2 - $10',
                description: '',
                web_url:
                    'https://www.tripadvisor.com/Restaurant_Review-g910883-d23866299-Reviews-Lenos_Carbon_Nuestro_Cartago-Cartago_Valle_del_Cauca_Department.html',
                write_review:
                    'https://www.tripadvisor.com/UserReview-g910883-d23866299-Lenos_Carbon_Nuestro_Cartago-Cartago_Valle_del_Cauca_Department.html',
                ancestors: [
                    {
                        subcategory: [
                            {
                                key: 'city',
                                name: 'City',
                            },
                        ],
                        name: 'Cartago',
                        abbrv: null,
                        location_id: '910883',
                    },
                    {
                        subcategory: [
                            {
                                key: 'department',
                                name: 'Department',
                            },
                        ],
                        name: 'Valle del Cauca Department',
                        abbrv: null,
                        location_id: '2021548',
                    },
                    {
                        subcategory: [
                            {
                                key: 'country',
                                name: 'Country',
                            },
                        ],
                        name: 'Colombia',
                        abbrv: null,
                        location_id: '294073',
                    },
                ],
                category: {
                    key: 'restaurant',
                    name: 'Restaurant',
                },
                subcategory: [
                    {
                        key: 'sit_down',
                        name: 'Sit down',
                    },
                ],
                parent_display_name: 'Cartago',
                is_jfy_enabled: false,
                nearest_metro_station: [],
                reviews: [null],
                phone: '+57 317 3004518',
                website: 'http://www.lenosycarbon.com.co/',
                email: 'cart.lenosfsnuestro@lenosycarbon.com.co',
                address_obj: {
                    street1:
                        'Centro Comercial Nuestro Cartago Carrera 2 Con Cal',
                    street2: null,
                    city: 'Cartago',
                    state: null,
                    country: 'Colombia',
                    postalcode: '3173004518',
                },
                address:
                    'Centro Comercial Nuestro Cartago Carrera 2 Con Cal, Cartago 3173004518 Colombia',
                hours: {
                    week_ranges: [
                        [
                            {
                                open_time: 690,
                                close_time: 1290,
                            },
                        ],
                        [
                            {
                                open_time: 690,
                                close_time: 1290,
                            },
                        ],
                        [
                            {
                                open_time: 690,
                                close_time: 1290,
                            },
                        ],
                        [
                            {
                                open_time: 690,
                                close_time: 1290,
                            },
                        ],
                        [
                            {
                                open_time: 690,
                                close_time: 1290,
                            },
                        ],
                        [
                            {
                                open_time: 690,
                                close_time: 1290,
                            },
                        ],
                        [
                            {
                                open_time: 690,
                                close_time: 1290,
                            },
                        ],
                    ],
                    timezone: 'America/Bogota',
                },
                is_candidate_for_contact_info_suppression: false,
                cuisine: [
                    {
                        key: '10749',
                        name: 'South American',
                    },
                    {
                        key: '10757',
                        name: 'Colombian',
                    },
                ],
                dietary_restrictions: [],
                establishment_types: [
                    {
                        key: '10591',
                        name: 'Restaurants',
                    },
                ],
            },
            {
                location_id: '8743481',
                name: 'El Gran Corte',
                latitude: '4.753351',
                longitude: '-75.92826',
                num_reviews: '1',
                timezone: 'America/Bogota',
                location_string: 'Cartago, Valle del Cauca Department',
                photo: {
                    images: {
                        small: {
                            width: '150',
                            url: 'https://media-cdn.tripadvisor.com/media/photo-l/09/4f/2f/fe/el-gran-corte-sja.jpg',
                            height: '150',
                        },
                        thumbnail: {
                            width: '50',
                            url: 'https://media-cdn.tripadvisor.com/media/photo-t/09/4f/2f/fe/el-gran-corte-sja.jpg',
                            height: '50',
                        },
                        original: {
                            width: '720',
                            url: 'https://media-cdn.tripadvisor.com/media/photo-o/09/4f/2f/fe/el-gran-corte-sja.jpg',
                            height: '720',
                        },
                        large: {
                            width: '550',
                            url: 'https://media-cdn.tripadvisor.com/media/photo-p/09/4f/2f/fe/el-gran-corte-sja.jpg',
                            height: '550',
                        },
                        medium: {
                            width: '450',
                            url: 'https://media-cdn.tripadvisor.com/media/photo-s/09/4f/2f/fe/el-gran-corte-sja.jpg',
                            height: '450',
                        },
                    },
                    is_blessed: true,
                    uploaded_date: '2015-10-23T12:24:10-0400',
                    caption: 'Filete de Pechuga',
                    id: '156184574',
                    helpful_votes: '2',
                    published_date: '2015-10-23T12:24:10-0400',
                    user: {
                        user_id: null,
                        member_id: '0',
                        type: 'user',
                    },
                },
                awards: [],
                doubleclick_zone: 'sa.colombia',
                preferred_map_engine: 'default',
                raw_ranking: '3.0197184085845947',
                ranking_geo: 'Cartago',
                ranking_geo_id: '910883',
                ranking_position: '27',
                ranking_denominator: '41',
                ranking_category: 'restaurant',
                ranking: '#25 of 54 Restaurants in Cartago',
                distance: '0.8574122903240378',
                distance_string: '0.9 km',
                bearing: 'southeast',
                rating: '5.0',
                is_closed: false,
                is_long_closed: false,
                price_level: '$$ - $$$',
                price: '$7 - $15',
                description: '',
                web_url:
                    'https://www.tripadvisor.com/Restaurant_Review-g910883-d8743481-Reviews-El_Gran_Corte-Cartago_Valle_del_Cauca_Department.html',
                write_review:
                    'https://www.tripadvisor.com/UserReview-g910883-d8743481-El_Gran_Corte-Cartago_Valle_del_Cauca_Department.html',
                ancestors: [
                    {
                        subcategory: [
                            {
                                key: 'city',
                                name: 'City',
                            },
                        ],
                        name: 'Cartago',
                        abbrv: null,
                        location_id: '910883',
                    },
                    {
                        subcategory: [
                            {
                                key: 'department',
                                name: 'Department',
                            },
                        ],
                        name: 'Valle del Cauca Department',
                        abbrv: null,
                        location_id: '2021548',
                    },
                    {
                        subcategory: [
                            {
                                key: 'country',
                                name: 'Country',
                            },
                        ],
                        name: 'Colombia',
                        abbrv: null,
                        location_id: '294073',
                    },
                ],
                category: {
                    key: 'restaurant',
                    name: 'Restaurant',
                },
                subcategory: [
                    {
                        key: 'sit_down',
                        name: 'Sit down',
                    },
                ],
                parent_display_name: 'Cartago',
                is_jfy_enabled: false,
                nearest_metro_station: [],
                reviews: [
                    {
                        id: '328792183',
                        lang: null,
                        location_id: '0',
                        published_date: '2022-07-07T18:16:06-04:00',
                        published_platform: 'Desktop',
                        rating: '5',
                        type: 'review',
                        helpful_votes: '0',
                        url: 'https://www.tripadvisor.com/ShowUserReviews?src=328792183#review328792183',
                        travel_date: null,
                        text: null,
                        user: null,
                        title: 'Steak',
                        owner_response: null,
                        subratings: [],
                        machine_translated: false,
                        machine_translatable: false,
                    },
                ],
                phone: '+57 2 2140525',
                website:
                    'https://www.facebook.com/El-GRAN-CORTE-SJA-Parrilla-al-carbon-453274114810737/',
                email: 'elgrancorte.sja@gmail.com',
                address_obj: {
                    street1: 'Carrera 3 18-106',
                    street2: null,
                    city: 'Cartago',
                    state: null,
                    country: 'Colombia',
                    postalcode: '762021',
                },
                address: 'Carrera 3 18-106, Cartago 762021 Colombia',
                is_candidate_for_contact_info_suppression: false,
                cuisine: [],
                dietary_restrictions: [],
                establishment_types: [
                    {
                        key: '10591',
                        name: 'Restaurants',
                    },
                ],
            },
        ])
    })
})
