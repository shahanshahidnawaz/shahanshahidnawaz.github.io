<script>
    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById('responsiveImage');
        img.onload = function() {
            if (this.naturalWidth < this.width) {
                this.style.width = '100%';
                this.style.height = 'auto';
            }
        };
    });
</script>