import Prismic from 'prismic.io'

exports.getRawData = async function getRawData() {
    var api = await Prismic.api("https://coltalb.prismic.io/api")
    var rawLabels = await api.query(Prismic.Predicates.at('document.type', 'labels'))
    var labels = processLabels(rawLabels)
    return {labels,lang:'en'}
}

exports.getData = async function getData() {
    let data = this.getRawData()
    //console.log(data)
    return data
}


function processLabels(data) {
    var returnable = {}
    returnable['ro'] = {}
    returnable['en'] = {}
    returnable['de'] = {}
    var temp = data.results[0].data
    for (var key in temp) {
        if (!temp.hasOwnProperty(key)) continue;

        let obj = temp[key];
        returnable['ro'][key.split('.')[1]] = obj.value.split('|')[0]
        returnable['en'][key.split('.')[1]] = obj.value.split('|')[1]
        returnable['de'][key.split('.')[1]] = obj.value.split('|')[2]
    }
    return returnable;
}

function processDogs(data, lang) {
    var returnable = []
    data.results.forEach((item) => {
        var output = {}
        if (item.uid) output.uid = item.uid

        if (item.data['dogs.name'])
            output.name = item.data['dogs.name'].value
        else
            output.name = ""

        if (item.data['dogs.birthdate']) {
            output.birthdate = item.data['dogs.birthdate'].value
            var a = moment()
            var b = moment(output.birthdate)

            var age = a.diff(b, 'months')
            if (age < 12)
                output.age = 1
            if (age >= 12 && age <= 30)
                output.age = 2
            if (age > 30)
                output.age = 3
        } else {
            output.birthdate = ""
            output.age = 0
        }
        if (item.data['dogs.status']) {
            if (item.data['dogs.status'].value == "adoptat")
                output.status = 1
            else if (item.data['dogs.status'].value == "rezervat")
                output.status = 2
            else output.status = 0
        }
        else output.status = 0

        if (item.data['dogs.sex'])
            output.sex = item.data['dogs.sex'].value
        else
            output.sex = "N/A"

        if (item.data['dogs.sort'])
            output.sort = item.data['dogs.sort'].value
        else output.sort = 0

        if (item.data['dogs.size'])
            output.size = item.data['dogs.size'].value
        else
            output.size = "N/A"

        if (item.data['dogs.description']) {
            output.description = item.data['dogs.description'].value[0]
            for (var k in output.description)
                if (lang === k) {
                    output.description = nl2br(output.description[k].value)
                }
        } else
            output.description = ""
        if (item.data['dogs.restrictii']) {
            output.restrictii = item.data['dogs.restrictii'].value[0]
            for (var k in output.restrictii)
                if (lang === k) {
                    output.restrictii = output.restrictii[k].value
                }
        } else
            output.restrictii = "-"

        if (item.data['dogs.dataadapost']) {
            output.dataadapost = item.data['dogs.dataadapost'].value
        } else
            output.dataadapost = "N/A"

        if (item.data['dogs.castrat']) {
            output.castrat = item.data['dogs.castrat'].value
        } else
            output.castrat = "N/A"
        if (item.data['dogs.long-description']) {
            output.longdescription = item.data['dogs.long-description'].value[0]
            for (var k in output.longdescription)
                if (lang === k) {
                    output.longdescription = marked(output.longdescription[k].value, {
                        sanitize: true
                    })
                }
        } else
            output.longdescription = ""

        output.images = []
        output.frontimages = []
        output.largeimages = []
        if (item.data['dogs.gallery']) {
            item.data['dogs.gallery'].value.forEach((image) => {
                output.images.push({
                    src: image.image.value.main.url,
                    w: parseInt(image.image.value.main.dimensions.width),
                    h: parseInt(image.image.value.main.dimensions.height)
                })
                if (image.image.value.views['front'])
                    output.frontimages.push({
                        src: image.image.value.views['front'].url,
                        w: parseInt(image.image.value.views['front'].dimensions.width),
                        h: parseInt(image.image.value.views['front'].dimensions.height)
                    })
                if (image.image.value.views['square'])
                    output.largeimages.push({
                        src: image.image.value.views['square'].url,
                        w: parseInt(image.image.value.views['square'].dimensions.width),
                        h: parseInt(image.image.value.views['square'].dimensions.height)
                    })

            })
        } else
            output.images.push("images/nodog.jpg")



        /*
        output.images256=[]
        item.data['dogs.gallery'].value.forEach((image)=>{
            output.images256.push(image.image.value.views['256'].url)
        })
        output.images512=[]
        item.data['dogs.gallery'].value.forEach((image)=>{
            output.images512.push(image.image.value.views['512'].url)
        })*/
        returnable.push(output)
    })
    returnable.sort((a, b) => {
        return b.sort > a.sort
    })

    return returnable
}