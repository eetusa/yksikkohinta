export const parse_data = (master_data, unit_price_column_no, discount_column_no, ignore_every_other) => {
    let data = master_data.split("\n")
    let header = data[0]
    let delim = header.split('\t').length - 1
    if (delim === 0) {
        return parse_normal(master_data, unit_price_column_no, discount_column_no, ignore_every_other)
    } else{
        return parse_delimiter(master_data, unit_price_column_no, discount_column_no, ignore_every_other)
    }
}

const parse_normal = (master_data, unit_price_column_no, discount_column_no, ignore_every_other) => {
    console.log(ignore_every_other)
    console.log(master_data)
    let data = master_data.split('\n')
    let columns_count = data[0].replace(/\s+/g, ' ').trim().split(" ").length

    console.log("Col count: " + columns_count)
    console.log("unit_price_column_no: " + unit_price_column_no)
    console.log("discount_column_no: " + discount_column_no)

    let result = []
    data[0] = data[0] + " Verot.&Alenn."

    result.push(data[0])
    for (let i = 1; i < data.length; i++){
        if (ignore_every_other && i % 2 !== 0) {
            continue
        }
        if (data[i].length === 0) continue

        let line = data[i].replace("EUR", '')
        line = line.replace(/\s+/g, ' ').trim().split(" ")

        let len = line.length
        let dx = columns_count - unit_price_column_no
        let x = len - dx
        let unit_price = line[x]
        unit_price = trim_number(unit_price)
        let p = 0
        if (unit_price > 0) {
            
        }
        let dy = columns_count - discount_column_no
        let y = len - dy
        let discount_amount = line[y]
        discount_amount = trim_number(discount_amount)
        // console.log(unit_price, discount_amount)
        p = get_taxfree_discounted_price(unit_price,discount_amount)
        data[i] = data[i] + " " + p
        result.push(data[i])
    }

    return result
}

const parse_delimiter = (master_data, unit_price_column_no, discount_column_no, ignore_every_other) => {
    console.log("parse delimiter")
    console.log(ignore_every_other)
    let data = master_data.split('\n')
    let columns_count = data[0].split('\t').length

    console.log("Col count: " + columns_count)
    console.log("unit_price_column_no: " + unit_price_column_no)
    console.log("discount_column_no: " + discount_column_no)

    let result = []
    data[0] = data[0] + " Verot.&Alenn."

    result.push(data[0])
    for (let i = 1; i < data.length; i++){
        if (ignore_every_other && i % 2 !== 0) {
            continue
        }
        if (data[i].length === 0) continue
        let line = data[i].replace("EUR", '')
        line = line.split("\t")
        // console.log(line)

        let len = line.length
        let dx = columns_count - unit_price_column_no
        let x = len - dx
        let unit_price = line[x]
        unit_price = trim_number(unit_price)
        let p = 0
        if (unit_price > 0) {
            
        }
        let dy = columns_count - discount_column_no
        let y = len - dy
        let discount_amount = line[y]
        if (discount_amount === ""){
            discount_amount = "0"
        }
        discount_amount = trim_number(discount_amount)
        // console.log(unit_price, discount_amount)
        p = get_taxfree_discounted_price(unit_price,discount_amount)
        data[i] = data[i] + " " + p
        result.push(data[i])
    }
    return result
}

const trim_number = (s) => {
    s = s.replace("-",'')
    s = s.replace("%",'')
    s = s.replace(",",".")
    return s
}

const get_taxfree_discounted_price = (unit_price, discount_amount) => {
    let d = 100 - discount_amount
    d = d / 100
    let res = unit_price * d
    res = res.toFixed(2)
    return res
}

// const reformat_table = (master_data) => {
//     let data = master_data.split('\n')
//     let columns_count = data[0].replace(/\s+/g, ' ').trim().split(" ").length
//     let res = []
//     for (let i = 0; i < data.length; i++){
//         res.push([])
//         for (let j = 0; j < columns_count; j++){
//             res[i].push([])
//         }
//     }
//     for (let i = 0; i < 1; i++){
//         let line = data[i].replace(/\s+/g, ' ').trim().split(" ")
//         for (let j = 0; j < line.length; j++){
//             res[i][j] = line[j]
//         }
//     }
//     for (let i = 1; i < data.length; i++){
//         let line = data[i].replace(/\s+/g, ' ').trim().split(" ")
//         for (let j = 0; j < line.length; j++){
//             if (j === 0){
//                 res[i][j] = line[j]
//             }
//         }
//     }

//     console.log(res)

// }

// const determine_name = (line) => {

// }

