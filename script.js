const buscarCidade = document.getElementById('buscarCidade')
const input = document.querySelector('input')

const mostrarOcultar = document.querySelector('.parte-2')

mostrarOcultar.classList.toggle('hidden')

input.addEventListener('keydown', e => {
  if (e.keyCode == 13) {
    e.preventDefault()

    mostrarOcultar.classList.remove('hidden')

    const localValue = buscarCidade.value
    const local = document.getElementById('local')

    const temperatura = document.getElementById('temperatura')

    const imagem = document.getElementById('statusIco')

    const statusDia = document.getElementById('statusDia')

    const maxTemp = document.getElementById('max')
    const minTemp = document.getElementById('min')

    

    axios
      .get(
        'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
          localValue +
          '?key=8F7AGL7YMMSWJQBNMM9RZYTFW '
      )

      .then(function (data) {
        console.log(data)

        local.innerHTML = data.data.resolvedAddress

        const temp = ((data.data.currentConditions.temp - 32) * 5) / 9
        temperatura.innerHTML = temp.toFixed(0) + '°'

        let max = ((data.data.days[0].tempmax - 32) * 5) / 9
        let min = ((data.data.days[0].tempmin - 32) * 5) / 9

        maxTemp.innerHTML = max.toFixed(0) + '°' + '/'
        minTemp.innerHTML = min.toFixed(0) + '°'

        if (data.data.currentConditions.icon == 'rain') {
          imagem.innerHTML = "<img src='" + 'assets/chuva.png' + "'>"
          statusDia.innerHTML = 'Chuva, parcialmente nublado'
          window.document.querySelector('body').style.background =
            'linear-gradient(180deg, #121E45 0%, #131313 129.81%)'
          document.querySelector('.parte-2').style.background = '#778DFF85'
        } 
        else if (data.data.currentConditions.icon == 'clear-day') {
          imagem.innerHTML = "<img src='" + 'assets/sol.png' + "'>"
          statusDia.innerHTML = 'Dia limpo'
          window.document.querySelector('body').style.background =
            'linear-gradient(180deg, #EABB42 0%, #131313 102.44%)'
          document.querySelector('.parte-2').style.background = '#FFE17785'
        } 
        else if (data.data.currentConditions.icon == 'partly-cloudy-day') {
          imagem.innerHTML = "<img src='" + 'assets/limpo.png' + "'>"
          statusDia.innerHTML = 'Parcialmente nublado'
          window.document.querySelector('body').style.background =
            'linear-gradient(180deg, #80C5F7 0%, #131313 102.44%)'
          document.querySelector('.parte-2').style.background = '#77DEFF85'
        }

        // FIM PARTE 1 /////

        const oitoManha = document.getElementById('8hr')
        const meioDia = document.getElementById('12h')
        const quatroTarde = document.getElementById('16h')
        const oitoNoite = document.getElementById('20h')
        const meiaNoite = document.getElementById('00h')

        const oitoHR = ((data.data.days[0].hours[8].temp - 32) * 5) / 9
        oitoManha.innerHTML = oitoHR.toFixed(0) + '°'

        const dozeHR = ((data.data.days[0].hours[12].temp - 32) * 5) / 9
        meioDia.innerHTML = dozeHR.toFixed(0) + '°'

        const quatroHR = ((data.data.days[0].hours[16].temp - 32) * 5) / 9
        quatroTarde.innerHTML = quatroHR.toFixed(0) + '°'

        const vinteHR = ((data.data.days[0].hours[20].temp - 32) * 5) / 9
        oitoNoite.innerHTML = vinteHR.toFixed(0) + '°'

        const zeroHR = ((data.data.days[0].hours[0].temp - 32) * 5) / 9
        meiaNoite.innerHTML = zeroHR.toFixed(0) + '°'


      
        

      })
      .catch(function (data) {
        console.log(data)
      })
  }
})


