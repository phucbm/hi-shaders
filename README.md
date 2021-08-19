# 🚀 My journey to the world of Shaders

This repo is where I store exercises and recaps when reading [The Book of Shaders](https://thebookofshaders.com/).

## Exercises

### 00 - Create Shaders with Three.js

In this exercise, I created an HTML `👋 Hello world!` page for Shaders using [Three.js](https://threejs.org/). To summarize:

> 💡 Shaders are not JavaScript, we store them inside a `<script>` tag just to get it as plain text later on. The browser will not run the code inside due to `type="x-shader/x-vertex"` and `type="x-shader/x-fragment"` are not the right type for JavaScript.
  
```html
<!-- Vertex Shader -->
<script id="vertexShader" type="x-shader/x-vertex">
        void main() {
            gl_Position = vec4( position, 1.0 );
        }
</script>

<!-- Fragment Shader -->
<script id="fragmentShader" type="x-shader/x-fragment">
        uniform float u_time; // Time in seconds since load

        void main() {
            gl_FragColor = vec4( abs(sin(u_time)), 0.0, 0.0, 1.0 );
        }
</script>
```

> 🎥 In Three.js, we use [THREE.ShaderMaterial()](https://threejs.org/docs/index.html?q=shader#api/en/materials/ShaderMaterial) to render Shaders.

Read more at chapter
📒 [03 - Uniforms](https://thebookofshaders.com/03/)
and
📗 [04 - Running your shader](https://thebookofshaders.com/04/)

💎 [Result](exercises/00/)

### 01 - Algorithmic drawing

📓 [05 - Algorithmic drawing](https://thebookofshaders.com/05/)

- https://www.iquilezles.org/www/articles/functions/functions.htm

- https://renderman.pixar.com/learn

- http://www.flong.com/archive/texts/code/shapers_poly/

💎 [Result](exercises/01/)

### 02 - Shape Functions

https://thebookofshaders.com/06/