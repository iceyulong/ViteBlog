import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './styles/index.css'
import Button from '../../components/button/Button.vue'
import Card from '../../components/card/Card.vue'
import Page from '../../components/page/Page.vue'
import Content from '../../components/content/Content.vue'
import Image from '../../components/image/Image.vue'
export default {
  ...DefaultTheme,
  enhanceApp (ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component(Button.name, Button)
    ctx.app.component(Card.name, Card)
    ctx.app.component(Page.name, Page)
    ctx.app.component(Content.name, Content)
    ctx.app.component(Image.name, Image)
    useComponents(ctx.app)
  }
}

