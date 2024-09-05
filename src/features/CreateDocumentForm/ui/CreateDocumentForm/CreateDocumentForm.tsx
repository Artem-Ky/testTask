import React, { FC, memo, useCallback } from 'react';
import cnBind from 'classnames/bind';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputLabel,
    TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';
import cls from './CreateDocumentForm.module.scss';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    CreateDocumentFormActions,
    CreateDocumentFormReducer,
} from '../../model/slices/CreateDocumentFormSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getCreateDocumentFormCompanySigDate,
    getCreateDocumentFormCompanySignatureName,
    getCreateDocumentFormDocumentName,
    getCreateDocumentFormDocumentStatus,
    getCreateDocumentFormDocumentType,
    getCreateDocumentFormEmployeeNumber,
    getCreateDocumentFormEmployeeSigDate,
    getCreateDocumentFormEmployeeSignatureName,
} from '../../model/selectors/CreateDocumentFormSelectors';

export interface CreateDocumentFormProps {
    classNames?: string[];
    onSendForm: (document: Document) => void;
}

const CreateDocumentForm: FC<CreateDocumentFormProps> = memo(
    (props: CreateDocumentFormProps) => {
        const { classNames = [], onSendForm } = props;
        const cn = cnBind.bind(cls);
        const dispatch = useAppDispatch();
        const companySigDate = useSelector(getCreateDocumentFormCompanySigDate);
        const companySignatureName = useSelector(
            getCreateDocumentFormCompanySignatureName,
        );
        const documentName = useSelector(getCreateDocumentFormDocumentName);
        const documentStatus = useSelector(getCreateDocumentFormDocumentStatus);
        const documentType = useSelector(getCreateDocumentFormDocumentType);
        const employeeNumber = useSelector(getCreateDocumentFormEmployeeNumber);
        const employeeSigDate = useSelector(
            getCreateDocumentFormEmployeeSigDate,
        );
        const employeeSignatureName = useSelector(
            getCreateDocumentFormEmployeeSignatureName,
        );

        const reducerList: ReducersList = {
            CreateDocumentForm: CreateDocumentFormReducer,
        };

        const onChangeCompanySignatureName = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                    CreateDocumentFormActions.setCompanySignatureName(
                        event.target.value,
                    ),
                );
            },
            [dispatch],
        );

        const onChangeDocumentName = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                    CreateDocumentFormActions.setDocumentName(
                        event.target.value,
                    ),
                );
            },
            [dispatch],
        );

        const onChangeDocumentStatus = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                    CreateDocumentFormActions.setDocumentStatus(
                        event.target.value,
                    ),
                );
            },
            [dispatch],
        );

        const onChangeDocumentType = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                    CreateDocumentFormActions.setDocumentType(
                        event.target.value,
                    ),
                );
            },
            [dispatch],
        );

        const onChangeEmployeeNumber = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                    CreateDocumentFormActions.setEmployeeNumber(
                        event.target.value,
                    ),
                );
            },
            [dispatch],
        );

        const onChangeEmployeeSignatureName = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                    CreateDocumentFormActions.setEmployeeSignatureName(
                        event.target.value,
                    ),
                );
            },
            [dispatch],
        );

        const handleCompanySigDateChange = useCallback(
            (newValue: Dayjs | null) => {
                if (newValue) {
                    dispatch(
                        CreateDocumentFormActions.setCompanySigDate(
                            newValue.toISOString(),
                        ),
                    );
                }
            },
            [dispatch],
        );

        const handleEmployeeSigDateChange = useCallback(
            (newValue: Dayjs | null) => {
                if (newValue) {
                    dispatch(
                        CreateDocumentFormActions.setEmployeeSigDate(
                            newValue.toISOString(),
                        ),
                    );
                }
            },
            [dispatch],
        );

        return (
            <DynamicModuleLoader reducers={reducerList} removeAfterUnmount>
                <form
                    className={cn(
                        cls.CreateDocumentForm,
                        ...classNames.map((clsName) => cls[clsName] || clsName),
                    )}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            columnGap: '32px',
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <FormControl>
                                <FormLabel htmlFor="date-picker-companySigDate">
                                    companySigDate
                                </FormLabel>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        defaultValue={dayjs(
                                            companySigDate || new Date(),
                                        )}
                                        value={
                                            companySigDate
                                                ? dayjs(companySigDate)
                                                : dayjs()
                                        }
                                        format="DD-MM-YYYY"
                                        onChange={handleCompanySigDateChange}
                                        slots={{
                                            // eslint-disable-next-line react/no-unstable-nested-components
                                            textField: (textFieldProps) => (
                                                <TextField
                                                    {...textFieldProps}
                                                    id="date-picker-companySigDate"
                                                />
                                            ),
                                        }}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <InputLabel
                                htmlFor="input-companySignatureName"
                                sx={{ marginRight: 2, whiteSpace: 'nowrap' }}
                            >
                                companySignatureName
                            </InputLabel>
                            <FormControl
                                sx={{ width: '25ch' }}
                                variant="outlined"
                            >
                                <Input
                                    id="input-companySignatureName"
                                    name="companySignatureName"
                                    type="text"
                                    value={companySignatureName || ''}
                                    onChange={onChangeCompanySignatureName}
                                />
                            </FormControl>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            columnGap: '24px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <InputLabel
                                htmlFor="input-documentName"
                                sx={{ marginRight: 2, whiteSpace: 'nowrap' }}
                            >
                                documentName
                            </InputLabel>
                            <FormControl
                                sx={{ width: '25ch' }}
                                variant="outlined"
                            >
                                <Input
                                    id="input-documentName"
                                    name="documentName"
                                    type="text"
                                    value={documentName || ''}
                                    onChange={onChangeDocumentName}
                                />
                            </FormControl>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <InputLabel
                                htmlFor="input-documentStatus"
                                sx={{ marginRight: 2, whiteSpace: 'nowrap' }}
                            >
                                documentStatus
                            </InputLabel>
                            <FormControl
                                sx={{ width: '25ch' }}
                                variant="outlined"
                            >
                                <Input
                                    id="input-documentStatus"
                                    name="documentStatus"
                                    type="text"
                                    value={documentStatus || ''}
                                    onChange={onChangeDocumentStatus}
                                />
                            </FormControl>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <InputLabel
                                htmlFor="input-documentType"
                                sx={{ marginRight: 2, whiteSpace: 'nowrap' }}
                            >
                                documentType
                            </InputLabel>
                            <FormControl
                                sx={{ width: '25ch' }}
                                variant="outlined"
                            >
                                <Input
                                    id="input-documentType"
                                    name="documentType"
                                    type="text"
                                    value={documentType || ''}
                                    onChange={onChangeDocumentType}
                                />
                            </FormControl>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            columnGap: '24px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <InputLabel
                                htmlFor="input-employeeNumber"
                                sx={{ marginRight: 2, whiteSpace: 'nowrap' }}
                            >
                                employeeNumber
                            </InputLabel>
                            <FormControl
                                sx={{ width: '25ch' }}
                                variant="outlined"
                            >
                                <Input
                                    id="input-employeeNumber"
                                    name="employeeNumber"
                                    type="text"
                                    value={employeeNumber || ''}
                                    onChange={onChangeEmployeeNumber}
                                />
                            </FormControl>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <FormControl>
                                <FormLabel htmlFor="date-picker-employeeSigDate">
                                    employeeSigDate
                                </FormLabel>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        defaultValue={dayjs(
                                            employeeSigDate || new Date(),
                                        )}
                                        value={
                                            employeeSigDate
                                                ? dayjs(employeeSigDate)
                                                : dayjs()
                                        }
                                        format="DD-MM-YYYY"
                                        onChange={handleEmployeeSigDateChange}
                                        slots={{
                                            // eslint-disable-next-line react/no-unstable-nested-components
                                            textField: (textFieldProps) => (
                                                <TextField
                                                    {...textFieldProps}
                                                    id="date-picker-employeeSigDate"
                                                />
                                            ),
                                        }}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <InputLabel
                                htmlFor="input-employeeSignatureName"
                                sx={{ marginRight: 2, whiteSpace: 'nowrap' }}
                            >
                                employeeSignatureName
                            </InputLabel>
                            <FormControl
                                sx={{ width: '25ch' }}
                                variant="outlined"
                            >
                                <Input
                                    id="input-employeeSignatureName"
                                    name="employeeSignatureName"
                                    type="text"
                                    value={employeeSignatureName || ''}
                                    onChange={onChangeEmployeeSignatureName}
                                />
                            </FormControl>
                        </Box>
                    </Box>
                </form>
            </DynamicModuleLoader>
        );
    },
);

export default CreateDocumentForm;
