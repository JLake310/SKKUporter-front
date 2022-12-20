import React, { useState } from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components';
import { palette } from '../../styles/palette';

interface Props {
    isMe?: boolean;
    name: string;
    message: string;
    time: string;
}

const Message = (props: Props) => {
    const { isMe, name, message, time } = props;
    const [isReportOn, setIsReportOn] = useState(false);
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const [isResultModalOpen, setIsResultModalOpen] = useState(false);

    const nextModalOpen = () => {
        setIsReportModalOpen(false);
        setIsResultModalOpen(true);
    };

    return (
        <MessageView isMe={isMe}>
            {!isMe && <Name>{name}</Name>}
            <HorizontalView>
                {isMe ? (
                    <>
                        <Time>{time}</Time>
                        <MyMessageBox>
                            <MessageText>{message}</MessageText>
                        </MyMessageBox>
                    </>
                ) : (
                    <>
                        <YourMessageBox
                            onLongPress={() => setIsReportOn(true)}
                            onPress={() => setIsReportOn(false)}
                            onAccessibilityEscape={() => setIsReportOn(false)}>
                            <MessageText>{message}</MessageText>
                        </YourMessageBox>
                        {isReportOn && (
                            <ReportBox
                                onPress={() => setIsReportModalOpen(true)}>
                                <ReportText>Report</ReportText>
                            </ReportBox>
                        )}
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={isReportModalOpen}>
                            <ModalBackDrop
                                isModalOpen={isReportModalOpen}
                                onPress={() => {
                                    setIsReportModalOpen(false);
                                }}
                            />
                            <ModalView height={166}>
                                <ModalTitle>신고 사유 선택</ModalTitle>
                                <ModalContentView>
                                    <TouchableOpacity onPress={nextModalOpen}>
                                        <ModalItem>
                                            음란물/불건전한 만남 및 대화
                                        </ModalItem>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={nextModalOpen}>
                                        <ModalItem>욕설/비하</ModalItem>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={nextModalOpen}>
                                        <ModalItem>낚시/놀람/도배</ModalItem>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={nextModalOpen}>
                                        <ModalItem>
                                            상업적 광고 및 판매
                                        </ModalItem>
                                    </TouchableOpacity>
                                </ModalContentView>
                            </ModalView>
                        </Modal>
                        <Modal transparent={true} visible={isResultModalOpen}>
                            <ModalBackDrop
                                isModalOpen={isResultModalOpen}
                                onPress={() => {
                                    setIsResultModalOpen(false);
                                    setIsReportOn(false);
                                }}
                            />
                            <ModalView height={120}>
                                <ModalContentView>
                                    <ModalItem>
                                        신고가 접수되었습니다.
                                    </ModalItem>
                                    <ModalItem>
                                        확인 후 조치가 취해질 예정입니다.
                                    </ModalItem>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setIsResultModalOpen(false);
                                            setIsReportOn(false);
                                        }}>
                                        <NextImage
                                            source={require('../../assets/images/next_button.png')}
                                        />
                                    </TouchableOpacity>
                                </ModalContentView>
                            </ModalView>
                        </Modal>
                        <Time>{time}</Time>
                    </>
                )}
            </HorizontalView>
        </MessageView>
    );
};

interface MessageViewProps {
    isMe?: boolean;
}

const MessageView = styled(View)`
    margin-top: 6px;
    ${(props: MessageViewProps) =>
        props.isMe
            ? css`
                  align-items: flex-end;
                  margin-right: 6px;
              `
            : css`
                  margin-left: 6px;
              `}
`;

const HorizontalView = styled(View)`
    flex-direction: row;
    align-items: flex-end;
`;

const Name = styled(Text)`
    font-size: 10px;
`;

const YourMessageBox = styled(TouchableOpacity)`
    width: auto;
    padding-right: 10px;
    height: 30px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${palette.LIGHT_GREEN};
`;

const MyMessageBox = styled(View)`
    width: auto;
    padding-right: 10px;
    height: 30px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${palette.POINT};
`;

const ReportBox = styled(Pressable)`
    position: absolute;
    left: 100px;
    top: -10px;
    justify-content: center;
    align-items: center;
    width: 47px;
    height: 19px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${palette.GREEN};
`;

const ReportText = styled(Text)`
    color: ${palette.BASIC};
    font-size: 10px;
`;

const MessageText = styled(Text)`
    height: 30px;
    font-size: 14px;
    margin-left: 9px;
    line-height: 30px;
`;

const Time = styled(Text)`
    font-size: 8px;
`;

interface ModalBackDropProps {
    isModalOpen: boolean;
}

const ModalBackDrop = styled(Pressable)`
    flex: 1;
    justify-content: center;
    align-items: center;
    ${(props: ModalBackDropProps) =>
        props.isModalOpen &&
        css`
            background-color: rgba(0, 0, 0, 0.4);
        `}
`;

interface ModalViewProps {
    height: number;
}

const ModalView = styled(View)`
    ${(props: ModalViewProps) => css`
        height: ${props.height}px;
        margin-top: -${props.height / 2}px;
    `}
    width: 247px;
    /* height: 166px; */
    position: absolute;
    top: 50%;
    left: 50%;
    /* margin-top: -83px; */
    margin-left: -123.5px;
    background-color: white;
    border-radius: 5px;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    }
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
`;

const ModalTitle = styled(Text)`
    font-size: 15px;
    margin-left: 12px;
    margin-top: 10px;
`;

const ModalItem = styled(Text)`
    font-size: 13px;
    margin: 7px;
`;

const ModalContentView = styled(View)`
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

const NextImage = styled(Image)`
    margin-top: 10px;
    width: 25px;
    height: 25px;
`;

export default Message;
