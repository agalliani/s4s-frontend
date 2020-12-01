<template>
  <v-app id="inspire">
    <v-app-bar dark app shrink-on-scroll src="../assets/toolbar-1-8bit.png">
      <v-toolbar-title>Live Course</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <!--
        To embed live chat is necessary to have the domain online.
        Try when FE is deployed.  -->

    <!--
         <iframe
         width="100"
         height="600"
         src="https://www.youtube.com/live_chat?v=[YouTubeUrlHere]&amp;embed_domain=[YourDomainHere]"
         </iframe>

         -->

    <v-main>
      <v-container>
        <v-row id="upper-row">
          <v-col>
            <v-card>
              <v-row id="inner-row">
                <v-col id="left" cols="8">
                  LIVE
                </v-col>

                <v-divider vertical></v-divider>
                <v-col id="right">
                  CHAT
                  <!-- per ora l'altezza è fissata, poi da sistemare in modo che si adatti al conenuto. In questo modo quando ci sarà il video la chat passa sotto -->
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                Resources:

                <v-row justify="space-around">
                  <v-chip-group multiple active-class="primary--text">
                    <v-chip>

                        <!-- implementare download e controllo computed -->
                      <v-icon>mdi-download</v-icon>
                      Presentazione-part-1 </v-chip
                    ><v-chip>
                      <v-icon>mdi-download</v-icon> Presentazione-part-2</v-chip
                    ><v-chip>
                      <v-icon>mdi-download</v-icon> Presentazione-part-3
                    </v-chip></v-chip-group
                  >
                </v-row>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "LiveCourse",

  data() {
    return {};
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#upper-row {
  /* background-color: lightblue; */
}

#left {
  /* background-color: lightgoldenrodyellow; */
}
#right {
  /* background-color: lightcyan; */
}

#inner-row {
  height: 70vh;
}
</style>
