import { Component, Inject } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Observer } from 'rxjs';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
@Component({
    selector: 'avatar-edit',
    template: `
    <div class="clearfix">
      <nz-upload
        nzAction="https://jsonplaceholder.typicode.com/posts/"
        nzListType="picture-card"
        [nzBeforeUpload]="beforeUpload"
        [(nzFileList)]="fileList"
        [nzData]="nzData"
        [nzShowButton]="fileList.length < 1"
        [nzShowUploadList]="showUploadList"
        [nzPreview]="handlePreview"
      >
        <i nz-icon nzType="plus"></i>
        <div class="ant-upload-text">上传图片</div>
      </nz-upload>
      <nz-modal
        [nzVisible]="previewVisible"
        [nzContent]="modalContent"
        [nzFooter]="null"
        (nzOnCancel)="previewVisible = false"
      >
        <ng-template #modalContent>
          <img [src]="previewImage" [ngStyle]="{ width: '100%' }" />
        </ng-template>
      </nz-modal>
    </div>
  `,
    styles: [
        `
        .clearfix{
            margin-left:120px
        }

        i[nz-icon] {
            font-size: 32px;
            color: #999;
        }
        .ant-upload-text {
            margin-top: 8px;
            color: #666;
        }
    `
    ]
})
export class AvatarEditComponent {
    showUploadList = {
        showPreviewIcon: true,
        showRemoveIcon: true,
        hidePreviewIconInNonImage: true
    };

    nzData = () => {
        let id = this.tokenService.get().id;
        return id;
    }
    beforeUpload = (file: File) => {
        return new Observable((observer: Observer<boolean>) => {
            const isJPG = file.type === 'image/jpeg';
            if (!isJPG) {
                this.msg.error('请上传jpg图片文件!');
                observer.complete();
                return;
            }
            const isLt2M = file.size / 1024 / 1024 < 4;
            if (!isLt2M) {
                this.msg.error('图片应小于4MB!');
                observer.complete();
                return;
            }
            observer.next(isJPG && isLt2M);
            observer.complete();
        });
    };
    fileList = [];
    previewImage: string | undefined = '';
    previewVisible = false;

    constructor(private msg: NzMessageService, @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService, ) { }

    handlePreview = (file: UploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    };
}