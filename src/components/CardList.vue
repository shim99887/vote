<template>
  <div class="container">

  <v-row>
    <v-col>
      <v-simple-table class="vote_table" dark>
        <thead>
        <tr>
          <th>비아키스 하드</th>
        </tr>
        </thead>
      <draggable class="list-group" style="width: 100%;" :list="list1" group="people" @change="log">
        <tr
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="index"
            style="height: 48px;"
        >
          <td style="font-size: 20px; text-align: center;">
            {{ element.name }}
          </td>
          <td style="padding-left: 10px">
            {{element.job}}
          </td>
        </tr>
      </draggable>
      </v-simple-table>
    </v-col>
    <v-col>

      <v-simple-table class="vote_table" dark>
        <thead>
        <tr>
          <th>길드원</th>
        </tr>
        </thead>
      <tbody>
        <draggable class="list-group" style="width: 100%;" :list="list2" group="people">
          <tr
              class="list-group-item"
              v-for="(element, index) in list2"
              :key="index"
              style="height: 48px;"
          >
            <td style="font-size: 20px; text-align: center;">
              {{ element.name }}
            </td>
          </tr>
        </draggable>
      </tbody>
      </v-simple-table>
    </v-col>

  </v-row>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [

      ],
      list2: [
        {name: "인파유스", job:"인파이터"},
        {name: "민트맛동산", job:"블레이드"},
        {name: "프레이비야", job:"기공사"},
        {name: "처리림", job:"버서커"},
        {name: "창원랜서", job:"창술사"},
        {name: "종겜초보", job:"블레이드"},
        {name: "철애", job:"호크아이"},
        {name: "잿불i", job:"리퍼"},
        {name: "월니", job:"버서커"},
        {name: "샤데나", job:"리퍼"},
        {name: "바드레이어스", job:"바드"},
        {name: "멍머이와마리오", job:"바드"},
        {name: "떵태훈", job:"스트라이커"},
        {name: "느리림", job:"바드"},
        {name: "궁디판다", job:"리퍼"},
        {name: "Makree", job:"건슬링어"},
        {name: "Sorinne", job:"기공사"},
        {name: "타락파워유꾸", job:"바드"},
        {name: "야채참치냠", job:"바드"},
        {name: "애교쟁이뿌리", job:"바드"},
        {name: "차도남나무", job:"워로드"},
        {name: "야코옹", job:"버서커"},
        {name: "전문팬더킬러", job:"아르카나"},
        {name: "곰짜", job:"인파이터"},
        {name: "맥주냠", job:"블래스터"},
        {name: "이상하게긴밤이라생각했다", job:"건슬링어"},
        {name: "금당작", job:"스카우터"},
        {name: "프링글스민트초코맛", job:"블래스터"},
        {name: "이코옹", job:"바드"},
        {name: "창뚤따", job:"창술사"},
        {name: "의병사", job:"버서커"},
        {name: "짱아마미야", job:"홀리나이트"},
        {name: "윤다영이따라와", job:"서머너"},
        {name: "래현이", job:"바드"},
        {name: "별candy", job:"건슬링어"},
        {name: "아기상어미르", job:"바드"},
        {name: "매화동산", job:"홀리나이트"},
        {name: "프레일로아o", job:"리퍼"},
        {name: "워닝쓰", job:"창술사"},
        {name: "달콤한세상", job:"서머너"},
        {name: "람뉴", job:"인파이터"},
        {name: "파슬드", job:"건슬링어"},
        {name: "몽쉘펀치", job:"인파이터"},
        {name: "돌아온로저씨", job:"버서커"},
        {name: "전사히어로", job:"버서커"},
        {name: "봄쁨", job:"바드"},
        {name: "라슈하르", job:"바드"},
        {name: "응구리와민아", job:"건슬링어"},
        {name: "얼그레이밀크티알로에두번", job:"워로드"},
        {name: "큐티쁘티프리티태영킹", job:"워로드"},
        {name: "쿠쿠루삥뽕빠숑", job:"리퍼"},
        {name: "케이한", job:"아르카나"},
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>
<style>
.vote_table{
  width: 400px;
}
.character{
  text-align: center;
}
.list-group-item:hover{
  background: gray;
}
</style>