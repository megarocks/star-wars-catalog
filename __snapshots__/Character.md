# `Character`

#### `it renders loading message`

```html
<sw-loading>
</sw-loading>

```

#### `it renders error`

```html
<sw-error>
</sw-error>

```

#### `it renders correct data`

```html
<div class="entity">
  <h3>
    Beru Whitesun lars
  </h3>
  <div>
    <label>
      Gender:
    </label>
    <span>
      female
    </span>
  </div>
  <div>
    <label>
      Height:
    </label>
    <span>
      165
    </span>
  </div>
  <div>
    <label>
      Films:
    </label>
    <div>
      <sw-resource-item-link datafieldname="title">
      </sw-resource-item-link>
      <sw-resource-item-link datafieldname="title">
      </sw-resource-item-link>
      <sw-resource-item-link datafieldname="title">
      </sw-resource-item-link>
    </div>
  </div>
</div>

```

