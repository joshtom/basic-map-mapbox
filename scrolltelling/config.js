var config = {
    style: 'mapbox://styles/joshtom/ck2vsj0xm07nk1clftlk72e03', //TODO
    accessToken: 'pk.eyJ1Ijoiam9zaHRvbSIsImEiOiJjazFranJtN28wYnpiM21wbngyYnVmNWVhIn0._hZgXozsX5twECrg2li7_g', //TODO
    title: 'Here is a short story', //TODO
    subtitle: 'A little about me', //TODO
    byline: 'Olajide Joshua', //TODO
    footer: 'Created at Concatenate Lagos 2019',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    chapters: [
        //TODO replace this data with data from the first point in your dataset
        {
            id: 'concatenate-lagos',
            title: 'Concatenate Lagos',
            description: 'A free conference for African developers with speakers from around the world.',
            location: {
              "center": [
                3.8976850618724654,
                7.374839863613502
              ],
              "zoom": 9.359638284520218,
              "pitch": 0,
              "bearing": 0
            }
        },
        {
            id: 'second-concatenate-lagos',
            title: 'Second Concatenate Lagos',
            description: 'Speakers from around the world.',
            location: {
              "center": [
                4.1026452192590455,
                7.295225165501876
              ],
              "zoom": 9.359638284520218,
              "pitch": 0,
              "bearing": 0
            }
        }

        
        //TODO Copy-paste more chapters here - one for each point in your dataset!
    ]
};