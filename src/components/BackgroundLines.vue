

        
 <template>
  <div class="bg-art">
			<div class="bg-item"></div>
			<div class="bg-item"></div>
			<div class="bg-item"></div>
			<div class="bg-item"></div>
			<div class="bg-item"></div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Backgroundlines'
}
</script>

<style>
    .bg-art {
    display: flex;
    height: 100%;
    pointer-events: none;
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
}

.bg-item {
    height: 100%;
    width: 20%;
    border-left: 1px solid rgba(128, 129, 139, 0.3);
}

.bg-item:first-child{
    border-left: none;
}

@media only screen and (max-width: 940px) {
    .bg-item:first-child{
        display: none;
    }

    .bg-item {
        width: 25%;
    }
}   


@media only screen and (max-width: 670px) {

    .bg-item:last-child{
        display: none;
    }

    .bg-item {
        width: 33%;
    }


}   


</style>