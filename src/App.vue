<template>
  
   
   <div class="wrapper-content">
     
     <section>
       <div class="container">


        <!-- wrapper -->
          <div class="notify__wrapper">

            <!-- title -->
            <div class="notify-title">
              <p>Notify-app</p>
              <!-- svg -->
              <svg @click="svgBtnLoad" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" cursor="pointer" x="0px" y="0px" viewBox="0 0 489.935 489.935" style="enable-background:new 0 0 489.935 489.935;" xml:space="preserve"> <g> <path d="M278.235,33.267c-116.7,0-211.6,95-211.6,211.7v0.7l-41.9-63.1c-4.1-6.2-12.5-7.9-18.7-3.8c-6.2,4.1-7.9,12.5-3.8,18.7 l60.8,91.5c2.2,3.3,5.7,5.4,9.6,5.9c0.6,0.1,1.1,0.1,1.7,0.1c3.3,0,6.5-1.2,9-3.5l84.5-76.1c5.5-5,6-13.5,1-19.1 c-5-5.5-13.5-6-19.1-1l-56.1,50.7v-1c0-101.9,82.8-184.7,184.6-184.7s184.7,82.8,184.7,184.7s-82.8,184.7-184.6,184.7 c-49.3,0-95.7-19.2-130.5-54.1c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1c40,40,93.1,62,149.6,62 c116.6,0,211.6-94.9,211.6-211.7S394.935,33.267,278.235,33.267z"></path> </g></svg>
            </div>

        <!-- notify -->
            <div class="notify__content">

              <PreLoader v-if="loading"/>

                <!-- получаем данные и передаем в
                  компонент notify через пропс и messages -->
                <Notify :messages="messagesWrapper"/>

            </div>

          </div>

       </div>
     </section>
   </div>
  
</template>


<script>
import Notify from '@/components/Notify.vue'
import PreLoader from '@/components/Preloader.vue'


export default {
  components: {
    Notify,
    PreLoader
  },
  data() {
    return {
      // можно использовать axios и в хуке mounted записать данные, и потом отрисовать
      getDataApi:[
    {
			"main": true,
 			"title": "🔨 Научимся строить свое API"
		},	
		{
			"main": true,
			"title": "📦 Хранить данные с API в VUEX"
		},
		{
			"main": true,
			"title": "🎨 Сделаем динамическую подгрузку содержимого - load more"
		},
		{
			"main": false,
			"title": "Будем управлять этими сообщениями на сервере"
		},
		{
			"main": false,
			"title": "Разберемся с CORS и защитой"
		},
		{
			"main": false,
			"title": "Сделаем прелодер и обновление данных"
		},
		{
			"main": false,
			"title": "Обработаем все ошибки"
		},
		{
			"main": false,
			"title": "Научимся переиспользовать эти уведомления в любых проектах"
		}
      ],
      messagesWrapper:[
        
      ],
      loading:false
    }
  },
mounted() {
  // вызываем запрос на API для отрисовки
// this.Notify()

// this.getNotifyLazy()

// фейковая загрузка без fetch с помощью setTimeout
this.fakeLoadingLazy()
},
  methods:{

    fakeLoadingLazy() {
   this.loading = true

      setTimeout(() => {
        this.messagesWrapper = this.getDataApi
        this.loading = false
      }, 3000);
    },
// Медленная загрузка для прелоадара чтобы посмотреть
    // getNotifyLazy() {
    //   this.loading = true

    //   setTimeout(() => {
    //     this.getNotify() 
    //   }, 2000);
    // }
    // Пример для отправки запроса и  РАБОТА LOADARA ПРИ ЗАГРУЗКЕ
    // 
    // 

    // getNotify() {
    //   this.loading = true
    //   axios
    //   .get('url')
    //   .then(res => {
    //     let response = res.data.notify
    //     this.messages = response
    //   })
    //   // обработка ошибок
    //   .catch(error => {
    //     console.log(error)
    //   })
    //   // метод finally когда закончен then вызовится финали
    //   .finally( () => (this.loading = false) )
    // }

    svgBtnLoad() {
// очищаем массив с постами
      this.messagesWrapper = [];
      // запускаем лоадер через 1 сек из-за небольшого косяка на экране
      setTimeout(() => {
        this.loading = true
      }, 1000);

      // заливаем данные в массив и отключаем лоадер
      setTimeout(() => {

        this.messagesWrapper = this.getDataApi;
        this.loading = false

      }, 3000);
      
    }
  },

}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.notify__wrapper {
  width: 400px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
}
.notify__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
}

.notify-title {
  display: flex;
  align-items: center;
  justify-content: space-between;


  p {
    font-size: 24px;
  }
}
</style>

