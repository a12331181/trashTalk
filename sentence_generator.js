function sample(array){
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function sentenceGenerator(selection){
  const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }

  const phrase = ['很簡單','很容易','很快','很正常']
  let job = ''
  let jobTask = ''
  let sentence = ''
  if (!selection){
    sentence = '麻煩幫我選一個職業喔！'
  }

  if (selection === 'engineer'){
    job = '工程師'
    jobTask = task.engineer
    sentence = `身為一位${job} ${sample(jobTask)}，${sample(phrase)}吧`
  }

  if (selection === 'designer'){
    job = '設計師'
    jobTask = task.designer
    sentence = `身為一位${job} ${sample(jobTask)}，${sample(phrase)}吧`
  }

  if (selection === 'entrepreneur'){
    job = '企業家'
    jobTask = task.entrepreneur
    sentence = `身為一位${job} ${sample(jobTask)}，${sample(phrase)}吧`
  }
  return sentence
}
module.exports = sentenceGenerator