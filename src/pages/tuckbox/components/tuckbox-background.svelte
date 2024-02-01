<script lang="ts">
	import { drop } from "@shared/dropzone";

      export let name: string;
      export let label: string;
      export let image: string;

      const changeImage = (e: Event) => {
            const { target } = e as any;
            if (target && target?.files[0]) {
                  image = URL.createObjectURL(target.files[0]);
            }
      };

      const dropImage = (e: DragEvent) => {
            e.preventDefault();
            if (e.dataTransfer) {
                  const firstFile = [...e.dataTransfer?.files][0];
                  image = URL.createObjectURL(firstFile);
            }
      };

      const preventDefault = (e: DragEvent) => {
            e.preventDefault();
      };
</script>

<div class="w1 form-item flex column gap-5">
      <label for="{name}">{label}</label>
      
      <div role="presentation" class="relative tuckbox-image background-image" style="background-image: url('{image}')"
            on:dragover={preventDefault}
            on:dragstart={preventDefault}
            on:drop={dropImage}
            class:has-image={Boolean(image) && image !== '/cardsback/beowulf.webp'}
      >
            <input type="file" class="w1 h1 file absolute top left invisible" name="{name}" on:change={changeImage} />
            <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="plus-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-plus-circle fa-w-16 absolute centered"
                  >
                  <path
                        fill="#adadad"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                        class=""
                  />
            </svg>
      </div>
</div>

<style>
      input[type="file"] {
            z-index: 999;
            cursor: pointer;
      }
      .tuckbox-image {
            width: 100%;
            height: 88mm;
            background-color: #c9c9c9;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            cursor: pointer;
      }

      .tuckbox-image svg.fa-plus-circle {
            z-index: 12;
      }
      .tuckbox-image.has-image::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(1px);
            filter: blur(2px);
            mix-blend-mode: difference;
            z-index: 9;
      }
</style>